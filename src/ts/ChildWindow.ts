import WindowFeatures from '@src/utils/WindowFeatures';
import 'neutralinojs-types';
import Client from './Client';

export enum Events {
	CLOSE = 'window:close',
	FOCUS = 'window:focus',
	SET = 'presenter:set',
	STYLE = 'presenter:style',
}

export interface IWindowProps extends Neutralino.window.WindowOptions {
	id: string;
	route?: string;
}

export default class ChildWindow {
	private _id: string;
	public get id() {
		return this._id;
	}

	private _native: Window | null = null;

	constructor({ id, route, ...options }: IWindowProps) {
		this._id = id;
		if (Client.isNeu) {
			Neutralino.window.create('/client.html', {
				title: id,
				maximizable: true,
				resizable: true,
				...options,
				enableInspector: true,
				hidden: true,
				exitProcessOnClose: true,
				processArgs: `--id=${id} --route=${route ?? id} --control-port=${NL_PORT}`,
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
		}
	}

	public async send(name: string, data?: any) {
		await Client.broadcast(`${name}`, data, this._id);
	}

	public async destroy() {
		await Client.broadcast(`${Events.CLOSE}`, null, this._id);
	}

	public async focus() {
		await Client.broadcast(`${Events.FOCUS}`, null, this._id);
	}
}
