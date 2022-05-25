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

export const DefaultPresentingState: IPresenterOptions = {
	scale: 1,
	font: "'Open Sans', Roboto, Arial, sans-serif",
	background: '#000',
	text: '#fff',
};

export default class Presenter {
	private static _instance: Presenter | null = null;
	public static get(): Presenter | null {
		return this._instance;
	}
	public static open(uri?: UriString): Presenter | null {
		try {
			this._instance = new Presenter(uri);
		} catch (e) {
			console.error('Failed to open presenter window');
			this._instance = null;
		}
		return this._instance;
	}
	public static close() {
		this._instance = null;
	}

	public set(data: any) {
		if (!this._window) {
		} else {
			this._window.postMessage(data, '*');
		}
	}

	public _currentOptions: IPresenterOptions = DefaultPresentingState;

	private _window: Window | null = null;

	constructor(uri?: UriString) {
		const url = new URL(window.location.href);
		url.searchParams.set('route', uri ?? `${CustomProtocol}://${TabType.PRESENT}`);

		if (!Neutralino) {
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
			this.createNeuWindow(url);
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

	private async createNeuWindow(url: URL) {
		await Neutralino.window.create(url.toString(), {
			title: 'Presenter',
			fullScreen: true,
			enableInspector: false,
			exitProcessOnClose: false,
			maximizable: true,
			borderless: true,
			resizable: true,
			maximize: true,
		});
	}

	public async setPresenting(presenting: string | null) {
		await this.send('setPresenting', presenting);
	}

	public async setOptions(options: Partial<IPresenterOptions>) {
		this._currentOptions = {
			...this._currentOptions,
			...options,
		};

		Storage.set('presenterOptions', this._currentOptions);

		await this.send('setPresenterOptions', this._currentOptions);
	}

	private async send(name: string, data: any) {
		if (Neutralino) {
			await Neutralino.app.broadcast(name, data);
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
}
