import WindowFeatures from '@src/utils/WindowFeatures';
import Client from './Client';
import { WebviewWindow, WindowOptions } from '@tauri-apps/api/window';
import { EventCallback, UnlistenFn } from '@tauri-apps/api/event';

export enum Events {
	CLOSE = 'window:close',
	FOCUS = 'window:focus',
	SET = 'presenter:set',
	STYLE = 'presenter:style',
}

export interface IWindowProps extends WindowOptions {
	id: string;
	route?: string;
}

export default class ChildWindow {
	private _id: string;
	public get id() {
		return this._id;
	}

	private _native: Window | null = null;
	private _window: WebviewWindow | null = null;

	public get window() {
		return this._window ?? this._native;
	}

	constructor({ id, route, ...options }: IWindowProps) {
		this._id = id;
		if (Client.isTau) {
			this._window = new WebviewWindow(id, {
				title: id,
				fileDropEnabled: false,
				focus: true,
				visible: true,
				minHeight: 300,
				minWidth: 500,
				...options,
				// processArgs: `--id=${id} --route=${route ?? id} --control-port=${NL_PORT}`,
			});
		} else {
			const query = new URLSearchParams();
			query.set('id', id);
			query.set('route', route ?? id);

			this._native = window.open(
				`${window.location.pathname}?${query.toString()}`,
				id,
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

	public async send(name: string, data?: any) {
		if (this._window) this._window.emit(name, data);
		// else if(this._native) this._native
	}

	public async destroy() {
		if (this._window) {
			this._window.close();
			this._window = null;
		}
		if (this._native) {
			this._native.removeEventListener('unload', this.destroy);
			this._native.close();
			this._native = null;
		}
	}

	public async focus() {
		if (this._window) this._window.setFocus();
		else if (this._native) this._native.focus();
	}

	public async listen<T>(event: string, handler: EventCallback<T>): Promise<UnlistenFn> {
		if (this._window) {
			return this._window.listen(event, handler);
		} else if (this._native) {
			// onunload => close
			// @ts-ignore
			this._native.addEventListener(event, handler);
			// @ts-ignore
			return () => this._native?.removeEventListener(event, handler);
		} else {
			return () => null;
		}
	}
}
