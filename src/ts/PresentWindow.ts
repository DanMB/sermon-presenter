import { CustomProtocol, UriString } from '@src/types/CustomURI';
import { TabType } from '@src/types/URIParts';
import Storage from './Storage';
import {
	WebviewWindow,
	WindowOptions,
	availableMonitors,
	currentMonitor,
	appWindow,
	PhysicalPosition,
} from '@tauri-apps/api/window';
import { EventCallback, UnlistenFn } from '@tauri-apps/api/event';
import ISongSlide from '@src/types/ISongSlide';
import { EventNames } from '@src/types/EventNames';

export interface IPresenterOptions {
	scale: number;
	font: string;
	background: string;
	text: string;
}

export interface IPresenterProps extends Partial<IPresenterOptions> {
	uri?: UriString;
}

export const DefaultPresentingState: IPresenterOptions = {
	scale: 1,
	font: "'Open Sans', Roboto, Arial, sans-serif",
	background: '#000',
	text: '#fff',
};

export default class PresentWindow {
	private static _instance: PresentWindow | null = null;
	public static get(): PresentWindow | null {
		return this._instance;
	}

	private _window: WebviewWindow;
	public get webview() {
		return this._window;
	}

	private _unlistenWindowClose: UnlistenFn = () => null;
	private _unlistenAppClose: UnlistenFn = () => null;

	constructor() {
		if (PresentWindow._instance !== null) {
			PresentWindow._instance.destroy();
		}

		this._window = new WebviewWindow('present', {
			fileDropEnabled: false,
			focus: false,
			minHeight: 300,
			minWidth: 500,
			title: 'Sermon Presenter',
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

		PresentWindow._instance = this;
	}

	private init = async () => {
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
			this.close();
			return;
		}

		await this._window.setPosition(new PhysicalPosition(other.position.x, other.position.y));
		await this._window.maximize();
		await this._window.setFullscreen(true);
		// await this._window.show();
	};

	public set = async (slide?: ISongSlide | null) => {
		await this._window.emit(EventNames.PRESENT, slide);
	};

	public style = async (style: IPresenterOptions) => {
		await this._window.emit(EventNames.STYLE, style);
	};

	public close = () => {
		this.destroy();
		this._window.close();
	};

	private destroy = () => {
		this._unlistenWindowClose();
		this._unlistenAppClose();
		appWindow.emit(EventNames.STOPPED);
	};
}
