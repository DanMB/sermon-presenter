import { CustomProtocol, UriString } from '@src/types/CustomURI';
import { TabType } from '@src/types/URIParts';
import 'neutralinojs-types';
import Storage from './Storage';

export interface IPresenterOptions {
	scale: number;
	font: string;
	background: string;
	text: string;
}

export interface IPresenterProps extends Partial<IPresenterOptions> {
	uri?: UriString;
}

export enum Events {
	SET = 'presenter:set',
	CLEAR = 'presenter:clear',
	STOP = 'presenter:stop',
	STYLE = 'presenter:style',
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
	public static open(uri?: UriString): PresentWindow | null {
		try {
			this._instance = new PresentWindow({ uri });
		} catch (e) {
			console.error('Failed to open presenter window');
			this._instance = null;
		}
		return this._instance;
	}
	public static close() {
		this._instance = null;
	}

	constructor({ uri, ...options }: IPresenterProps) {
		const params = new URLSearchParams();
		params.set('route', uri ?? `${CustomProtocol}://${TabType.PRESENT}`);

		const path = `/#?${params.toString()}`;
		Neutralino.window.create(path, {
			title: 'Presenter',
			fullScreen: true,
			enableInspector: true,
			exitProcessOnClose: true,
			maximizable: true,
			borderless: true,
			resizable: true,
			maximize: false,
			hidden: true,
			processArgs: `--route=present --control-port=${NL_PORT}`,
		});
	}

	public async send(name: Event, data: any) {
		await Neutralino.events.broadcast(`${name}`, data);
	}

	public async destroy() {
		await Neutralino.events.broadcast(Events.STOP);
	}
}
