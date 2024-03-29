import { WebviewWindow, availableMonitors, currentMonitor, appWindow, PhysicalPosition } from '@tauri-apps/api/window';
import { type } from '@tauri-apps/api/os';
import { UnlistenFn } from '@tauri-apps/api/event';
import { EventNames } from '@src/types/EventNames';
import Client from '../Client';
import WindowFeatures from '@src/utils/WindowFeatures';
import CustomEvents, { Events } from '../CustomEvents';
import Tabs from '../tabs/Tabs';
import { blackedOut, cleared, current, currentTab, isOpen } from './hooks';
import ISetList from '@src/types/ISetList';
import Settings, { ISettingsState } from '../Settings';

export default class PresentWindow {
	private static _instance: PresentWindow | null = null;
	public static get(): PresentWindow | null {
		return this._instance;
	}

	private _window: WebviewWindow | null = null;
	public get webview() {
		return this._window;
	}

	private _unlistenWindowClose: UnlistenFn = () => null;
	private _unlistenAppClose: UnlistenFn = () => null;
	private _unlistenStyleSet: UnlistenFn = () => null;

	private _native: Window | null = null;

	private _current: string = '';
	public get current() {
		return this._current;
	}

	constructor() {
		if (PresentWindow._instance !== null) {
			PresentWindow._instance.close();
		}

		cleared.set(true);
		blackedOut.set(true);

		CustomEvents.listen(Events.SLIDE, this.onSlideEvent);
		CustomEvents.listen(Events.STOP, this.onStopShow);

		if (Client.isTau) {
			this._window = new WebviewWindow('present', {
				fileDropEnabled: false,
				focus: false,
				minHeight: 300,
				minWidth: 500,
				title: 'OurPresenter',
				visible: false,
				decorations: false,
				skipTaskbar: false,
				resizable: true,
				url: window.location.origin + window.location.pathname,
				// processArgs: `--id=${id} --route=${route ?? id} --control-port=${NL_PORT}`,
			});

			this._window.once('tauri://created', this.init);

			this._window.once('tauri://error', e => {
				console.error(e);
				this.close();
			});
		} else {
			const query = new URLSearchParams();
			query.set('label', 'present');

			this._native = window.open(
				`${window.location.pathname}?${query.toString()}`,
				'present',
				WindowFeatures.settingsToString({
					width: 500,
					height: 500,
					location: false,
					menubar: false,
					resizable: true,
					scrollbars: false,
					status: false,
					toolbar: false,
					top: -500,
					left: -500,
					fullscreen: true,
				})
			);
			if (this._native) {
				this._native.addEventListener('beforeunload', () => {
					this.destroy();
				});
				this.updateStyle();
			}
		}

		PresentWindow._instance = this;
		isOpen.set(true);
	}

	private onSlideEvent = (e: CustomEvent<string>) => {
		if (!e.detail) {
			current.set(null);
			currentTab.set(null);
			return;
		}
		this._current = e.detail;

		const parts = e.detail ? e.detail.split('/') : [];
		const tab = parts[0] ? Tabs.getTab<ISetList>(parts[0]) : undefined;
		const song = parts[1] && tab ? tab.get().data.songs.find(s => s.title === parts[1]) : null;
		const slide = parts[2] && song ? song.slides[parseInt(parts[2])] : null;

		this.set(slide);
		current.set(e.detail || null);
		currentTab.set(tab?.get().id || null);
	};

	private init = async () => {
		this.style(Settings.get());
		this._unlistenStyleSet = Settings.sub(this.style);
		if (!this._window) return;
		this._unlistenAppClose = await appWindow.onCloseRequested(this.close);
		this._unlistenWindowClose = await this._window.onCloseRequested(this.destroy);

		const monitors = await availableMonitors();
		const current = await currentMonitor();

		if (monitors.length <= 0 || !current) {
			console.log('no monitors');
			this.close();
			return;
		}

		const other = monitors.find(m => m.name !== current.name);

		if (!other) {
			console.log('no 2nd monitor');
			// this.close();
			return;
		}

		await this._window.setPosition(new PhysicalPosition(other.position.x, other.position.y));
		await this._window.maximize();
		const os = await type();
		if (os === 'Darwin') await this._window.setFullscreen(true);
		this.updateStyle();
		// await this._window.show();
	};

	public set = async (slide?: string | null) => {
		cleared.set(false);
		blackedOut.set(false);
		if (this._window) {
			await this._window.emit(EventNames.PRESENT, slide);
		} else if (this._native) {
			this._native.postMessage({ event: EventNames.PRESENT, payload: JSON.stringify(slide) }, window.location.origin);
		}
	};

	private _styleUpdateTimeout: NodeJS.Timeout | undefined;

	public updateStyle = () => {
		if (this._styleUpdateTimeout) clearTimeout(this._styleUpdateTimeout);
		this._styleUpdateTimeout = setTimeout(() => {
			this.style(Settings.get());
		}, 600);
	};

	public style = async (style: ISettingsState) => {
		if (this._window) {
			await this._window.emit(EventNames.STYLE, style);
		} else if (this._native) {
			this._native.postMessage({ event: EventNames.STYLE, payload: JSON.stringify(style) }, window.location.origin);
		}
	};

	public clear = async () => {
		cleared.set(!cleared.get());
		if (this._window) {
			await this._window.emit(EventNames.CLEAR);
		} else if (this._native) {
			this._native.postMessage({ event: EventNames.CLEAR }, window.location.origin);
		}
	};

	public blackout = async () => {
		blackedOut.set(!blackedOut.get());
		if (this._window) {
			await this._window.emit(EventNames.BLACKOUT);
		} else if (this._native) {
			this._native.postMessage({ event: EventNames.BLACKOUT }, window.location.origin);
		}
	};

	private onStopShow = () => {
		this.close();
	};

	public close = () => {
		this.destroy();
		if (this._window) this._window.close();
		if (this._native) this._native.close();
	};

	private destroy = () => {
		this._unlistenWindowClose();
		this._unlistenAppClose();
		this._unlistenStyleSet();
		CustomEvents.remove(Events.SLIDE, this.onSlideEvent);
		CustomEvents.remove(Events.STOP, this.onStopShow);
		appWindow.emit(EventNames.STOPPED);
		isOpen.set(false);
	};

	public static clear = () => {
		PresentWindow.get()?.clear();
	};

	public static blackout = () => {
		PresentWindow.get()?.blackout();
	};

	public static start = () => {
		CustomEvents.dispatch(Events.START);
	};

	public static stop = () => {
		CustomEvents.dispatch(Events.STOP);
	};

	public static next = () => {
		const currentSlide = current.get();
		const tab = currentTab.get();
		if (!tab || !currentSlide) return;
		const tabData = Tabs.getTab<ISetList>(tab);
		if (!tabData) return;

		const parts = currentSlide ? currentSlide.split('/') : [];
		const song = parts[1] ? tabData.get().data.songs.find(s => s.title === parts[1]) : null;
		const slide = parts[2] ? parseInt(parts[2]) : null;
		if (!song || slide == null) return;

		let nextSlide = slide + 1;

		if (nextSlide >= song.slides.length) nextSlide = 0;

		CustomEvents.dispatch(Events.SLIDE, `${parts[0]}/${parts[1]}/${nextSlide}`);
	};

	public static prev = () => {
		const currentSlide = current.get();
		const tab = currentTab.get();
		if (!tab || !currentSlide) return;
		const tabData = Tabs.getTab<ISetList>(tab);
		if (!tabData) return;

		const parts = currentSlide ? currentSlide.split('/') : [];
		const song = parts[1] ? tabData.get().data.songs.find(s => s.title === parts[1]) : null;
		const slide = parts[2] ? parseInt(parts[2]) : null;
		if (!song || slide == null) return;

		let prevSlide = slide - 1;

		if (prevSlide < 0) prevSlide = song.slides.length - 1;

		CustomEvents.dispatch(Events.SLIDE, `${parts[0]}/${parts[1]}/${prevSlide}`);
	};

	public static nextGroup = () => {
		const currentSlide = current.get();
		const tab = currentTab.get();
		if (!tab || !currentSlide) return;
		const tabData = Tabs.getTab<ISetList>(tab);
		if (!tabData) return;

		const songs = tabData.get().data.songs;

		const parts = currentSlide ? currentSlide.split('/') : [];
		const song = parts[1] ? songs.findIndex(s => s.title === parts[1]) : null;
		if (song == null) return;

		let nextGroup = song + 1;

		if (nextGroup >= songs.length) nextGroup = 0;
		const id = songs[nextGroup]?.title;
		if (!id) return;

		CustomEvents.dispatch(Events.SLIDE, `${parts[0]}/${id}/0`);
	};

	public static prevGroup = () => {
		const currentSlide = current.get();
		const tab = currentTab.get();
		if (!tab || !currentSlide) return;
		const tabData = Tabs.getTab<ISetList>(tab);
		if (!tabData) return;

		const songs = tabData.get().data.songs;

		const parts = currentSlide ? currentSlide.split('/') : [];
		const song = parts[1] ? songs.findIndex(s => s.title === parts[1]) : null;
		if (song == null) return;

		let prevGroup = song - 1;

		if (prevGroup < 0) prevGroup = songs.length - 1;
		const id = songs[prevGroup]?.title;
		if (!id) return;

		CustomEvents.dispatch(Events.SLIDE, `${parts[0]}/${id}/0`);
	};

	public static gotoIndex = (index: number) => {
		const currentSlide = current.get();
		const tab = currentTab.get();
		if (!tab || !currentSlide) return;
		const tabData = Tabs.getTab<ISetList>(tab);
		if (!tabData) return;

		const parts = currentSlide ? currentSlide.split('/') : [];
		const song = parts[1] ? tabData.get().data.songs.find(s => s.title === parts[1]) : null;
		const slide = parts[2] ? parseInt(parts[2]) : null;
		if (!song || slide == null) return;

		let nextSlide = index;

		if (nextSlide >= song.slides.length) return;

		CustomEvents.dispatch(Events.SLIDE, `${parts[0]}/${parts[1]}/${nextSlide}`);
	};
}
