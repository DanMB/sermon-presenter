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

	constructor({ id, route, ...options }: IWindowProps) {
		this._id = id;

		Neutralino.window.create('/client.html', {
			title: id,
			maximizable: true,
			resizable: true,
			...options,
			hidden: true,
			exitProcessOnClose: true,
			processArgs: `--id=${id} --route=${route ?? id} --control-port=${NL_PORT}`,
		});
	}

	public async send(name: string, data?: any) {
		await Client.broadcast(`${name}`, data, this._id);
		await Neutralino.events.broadcast(`${name}`, data);
	}

	public async destroy() {
		await Client.broadcast(`${Events.CLOSE}`, null, this._id);
	}

	public async focus() {
		await Client.broadcast(`${Events.FOCUS}`, null, this._id);
	}
}
