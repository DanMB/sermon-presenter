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

	private _window: Window | null = null;

	constructor({ uri, ...options }: IPresenterProps) {
		if (!Neutralino) {
			const url = new URL(window.location.href);
			url.searchParams.set('route', uri ?? `${CustomProtocol}://${TabType.PRESENT}`);

			this._window = window.open(
				url,
				'PresenterWindow',
				this.settingsToString({
					width: 500,
					height: 500,
					location: false,
					menubar: false,
					resizable: true,
					scrollbars: false,
					status: false,
					toolbar: false,
					top: 0,
					left: 0,
				})
			);
		} else {
			const params = new URLSearchParams();
			params.set('route', uri ?? `${CustomProtocol}://${TabType.PRESENT}`);
			this.createNeuWindow(params);
		}
	}

	private settingsToString(settings: { [key: string]: number | string | boolean }): string {
		return Object.keys(settings)
			.map(key => {
				let value = settings[key];
				if (typeof value == 'boolean') {
					value = value ? 'yes' : 'no';
				}
				return `${key}=${settings[key]}`;
			})
			.join(',');
	}

	private async createNeuWindow(params: URLSearchParams) {
		const path = `/#?${params.toString()}`;
		// Neutralino.debug.log(`Creating window - ${path}`);
		// return;
		await Neutralino.window.create(path, {
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
		if (Neutralino) {
			// Neutralino.debug.log(`${name} - ${data}`);
			// return;
			await Neutralino.events.broadcast(`${name}`, data);
		} else if (this._window) {
			this._window.postMessage(
				{
					name,
					data,
				},
				'*'
			);
		}
	}

	public async destroy() {
		console.log('Destroying window');
		if (Neutralino) {
			await Neutralino.events.broadcast(Events.STOP);
		} else if (this._window) {
			this._window.close();
			this._window = null;
		}
	}
}
