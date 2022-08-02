import CustomMap, { ReadonlyCustomMap } from '@src/types/CustomMap';

export default class Client {
	public static async init(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (typeof Neutralino !== 'undefined') {
				Neutralino.events.on('ready', () => {
					resolve();
				});

				Neutralino.init();
			} else {
				window.addEventListener('onNeuLoaded', async () => {
					if (typeof Neutralino !== 'undefined') {
						Neutralino.events.on('ready', () => {
							resolve();
						});

						Neutralino.init();
					} else {
						reject();
					}
				});
			}
		});
	}

	private static argsMap: CustomMap<string> | null = null;
	private static argRegex = /^--([a-z-_\d]*)=?(.*)$/;

	public static getArgs(args?: string[]): ReadonlyCustomMap<string> {
		if (this.argsMap !== null) return this.argsMap.readonly;

		const map = new CustomMap<string>();

		if (!args && !NL_ARGS) return map;
		const cleanedArray = (args || NL_ARGS).filter(a => a.length > 0 && a.startsWith('--'));

		for (const arg of cleanedArray) {
			const match = arg.match(this.argRegex);
			if (match && match[1]) {
				map.set(match[1], match[2] ?? '');
			}
		}

		this.argsMap = map;
		return map;
	}

	private static _ws: WebSocket | null = null;

	public static connect(port: number | string, host: string = 'localhost') {
		this._ws = new WebSocket(`ws:${host}:${port}`);

		this._ws.addEventListener('message', event => {
			try {
				const data = event?.data ? JSON.parse(event.data) : null;
				if (data?.event) {
					window.dispatchEvent(new CustomEvent(`ws:${data.event}`, { detail: data.data }));
				}
			} catch (e) {
				console.warn('Failed to parse socket event', e);
			}
		});
	}

	public static async broadcast<T = any>(name: string, data?: T) {
		await Neutralino.events.broadcast(name, data);
	}

	public static listen<T = any>(name: string, fnc: (e: CustomEvent<T>) => void) {
		if (!this._ws) return;
		window.addEventListener(`ws:${name}`, fnc as EventListenerOrEventListenerObject);
	}

	public static remove<T = any>(name: string, fnc: (e: CustomEvent<T>) => void) {
		if (!this._ws) return;
		window.removeEventListener(`ws:${name}`, fnc as EventListenerOrEventListenerObject);
	}
}
