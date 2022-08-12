import CustomMap, { ReadonlyCustomMap } from '@src/types/CustomMap';
import { Events } from './ChildWindow';

export default class Client {
	public static async init(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (typeof Neutralino !== 'undefined') {
				Neutralino.events.on('ready', () => {
					this.createListeners();
					resolve();
				});

				Neutralino.init();
			} else {
				window.addEventListener('onNeuLoaded', async () => {
					if (typeof Neutralino !== 'undefined') {
						Neutralino.events.on('ready', () => {
							this.createListeners();
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

	private static createListeners = () => {
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
		if (!this._ws) return;
		this._ws.removeEventListener('message', this.onMessage);
		Client.remove(Events.CLOSE, this.closeWindow);
		Client.remove(Events.FOCUS, this.focusWindow);
	};

	private static focusWindow = () => {
		Neutralino.window.focus();
	};

	private static closeWindow = () => {
		Neutralino.app.exit();
	};

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
		await Neutralino.events.broadcast(name, {
			target,
			sender: Client.getId(),
			data: data,
		});
	}

	public static listen<T = any>(name: string, fnc: (e: CustomEvent<T>) => void) {
		if (!this._ws) return;
		window.addEventListener(`wsmsg:${name}`, fnc as EventListenerOrEventListenerObject);
	}

	public static remove<T = any>(name: string, fnc: (e: CustomEvent<T>) => void) {
		if (!this._ws) return;
		window.removeEventListener(`wsmsg:${name}`, fnc as EventListenerOrEventListenerObject);
	}
}
