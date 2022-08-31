import { WebviewWindow } from '@tauri-apps/api/window';
import { EventCallback, UnlistenFn } from '@tauri-apps/api/event';
import Client from './Client';
import WindowFeatures from '@src/utils/WindowFeatures';

export default class ChildWindow {
	private _window: WebviewWindow | null = null;
	public get webview() {
		return this._window;
	}

	private _unlistenWindowClose: UnlistenFn = () => null;
	private _unlistenAppClose: UnlistenFn = () => null;

	private _native: Window | null = null;
	public get native() {
		return this._native;
	}

	constructor() {
		if (Client.isTau) {
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
			if (this._native) this._native.addEventListener('unload', this.destroy);
		}
	}

	private init = async () => {};

	public close = () => {
		this.destroy();
		if (this._window) this._window.close();
		if (this._native) this._native.close();
	};

	private destroy = () => {
		this._unlistenWindowClose();
		this._unlistenAppClose();
	};
}
