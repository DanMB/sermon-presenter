import CustomMap, { ReadonlyCustomMap } from '@src/types/CustomMap';
import { Events } from './ChildWindow';

export default class Client {
	public static isNeu: boolean | undefined = undefined;

	public static async init(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (typeof Neutralino !== 'undefined') {
				Neutralino.events.on('ready', () => {
					Client.isNeu = true;
					this.createListeners();
					resolve();
				});

				Neutralino.init();
				// @ts-ignore
			} else if (window.NEU_LOADED === false) {
				window.addEventListener('onNeuLoaded', async () => {
					if (typeof Neutralino !== 'undefined') {
						Neutralino.events.on('ready', () => {
							Client.isNeu = true;
							this.createListeners();
							resolve();
						});

						Neutralino.init();
					} else {
						Client.isNeu = false;
						reject();
					}
				});
			} else {
				Client.isNeu = false;
				reject();
			}
		});
	}

	private static createListeners = () => {
		Client.on('windowClose', this.closeWindow);

		const controlPort = Client.getArgs().get('control-port');

		if (controlPort) {
			Client.connect(controlPort);
			Client.listen(Events.CLOSE, this.closeWindow);
			Client.listen(Events.FOCUS, this.focusWindow);
			// Client.listen(Events.STOP, onStopPresenting);
			// Client.listen(Events.SET, onSetPresenting);
		}
	};

	public static destroy = () => {
		Client.off('windowClose', this.closeWindow);
		if (this._ws) this._ws.removeEventListener('message', this.onMessage);
		Client.remove(Events.CLOSE, this.closeWindow);
		Client.remove(Events.FOCUS, this.focusWindow);
	};

	private static focusWindow = () => {
		if (this.isNeu) {
			Neutralino.window.focus();
		} else {
		}
	};

	private static closeWindow = () => {
		if (this.isNeu) {
			Neutralino.app.exit();
		} else {
		}
	};

	private static argsMap: CustomMap<string> | null = null;
	private static argRegex = /^--([a-z-_\d]*)=?(.*)$/;

	public static getArgs(): ReadonlyCustomMap<string> {
		if (this.argsMap !== null) return this.argsMap.readonly;

		const map = new CustomMap<string>();

		if (!this.isNeu) {
			const search = new URLSearchParams(window.location.search);

			for (const [key, value] of search.entries()) {
				map.set(key, value ?? '');
			}

			this.argsMap = map;
		} else if (NL_ARGS !== undefined && NL_ARGS) {
			const cleanedArray = NL_ARGS.filter(a => a.length > 0 && a.startsWith('--'));

			for (const arg of cleanedArray) {
				const match = arg.match(this.argRegex);
				if (match && match[1]) {
					map.set(match[1], match[2] ?? '');
				}
			}

			this.argsMap = map;
		}

		return map;
	}

	public static getId(): string {
		return Client.getArgs().get('id') ?? 'client';
	}

	private static _ws: WebSocket | null = null;

	public static connect(port: number | string, host: string = 'localhost') {
		this._ws = new WebSocket(`ws:${host}:${port}`);

		this._ws.addEventListener('message', this.onMessage);
	}

	private static onMessage = (event: MessageEvent<any>) => {
		try {
			const message = event?.data ? JSON.parse(event.data) : null;
			if (message?.event && message?.data) {
				const { target, sender, data } = message.data;
				const id = this.getId();
				if (sender !== id && (target === '*' || target === this.getId())) {
					window.dispatchEvent(new CustomEvent(`wsmsg:${message.event}`, { detail: data }));
				}
			}
		} catch (e) {
			console.warn('Failed to parse socket event', e);
		}
	};

	public static async broadcast<T = any>(name: string, data?: T, target: string = '*') {
		if (this.isNeu) {
			await Neutralino.events.broadcast(name, {
				target,
				sender: Client.getId(),
				data: data,
			});
		} else {
		}
	}

	public static listen<T = any>(name: string, fnc: (e: CustomEvent<T>) => void) {
		if (!this._ws) return;
		window.addEventListener(`wsmsg:${name}`, fnc as EventListenerOrEventListenerObject);
	}

	public static remove<T = any>(name: string, fnc: (e: CustomEvent<T>) => void) {
		if (!this._ws) return;
		window.removeEventListener(`wsmsg:${name}`, fnc as EventListenerOrEventListenerObject);
	}

	public static on(eventName: string, handler: () => void) {
		if (this.isNeu) {
			Neutralino.events.on(eventName, handler);
		} else {
		}
	}

	public static off(eventName: string, handler: () => void) {
		if (this.isNeu) {
			Neutralino.events.off(eventName, handler);
		} else {
		}
	}
}
