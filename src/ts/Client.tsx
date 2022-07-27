import CustomMap, { ReadonlyCustomMap } from '@src/types/CustomMap';
import { h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

export default class Client {
	private static _isNeu: boolean | null = null;
	public static async isNeu(): Promise<boolean> {
		console.log('Window.isNeu', Client._isNeu);
		if (Client._isNeu !== null) {
			return Client._isNeu;
		}

		// @ts-ignore
		if (!window.REF_PORT) {
			Client._isNeu = false;
			return Client._isNeu;
		}

		// @ts-ignore
		if (window.NEU_LOADED) {
			Client._isNeu = true;
			return Client._isNeu;
		} else {
			return new Promise(resolve => {
				window.addEventListener('onNeuLoaded', () => {
					Client._isNeu = typeof Neutralino !== 'undefined';
					resolve(Client._isNeu);
				});
			});
		}
	}

	public static useIsNeu(): boolean {
		const [isNeuState, setIsNeuState] = useState<boolean>(Client._isNeu ?? false);

		useEffect(() => {
			Client.isNeu()
				.then(isNeu => {
					setIsNeuState(isNeu);
				})
				.catch(() => {
					setIsNeuState(false);
				});

			return () => {};
		}, []);

		return isNeuState;
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
		if (!Neutralino) return;
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

export const useIsNeu = Client.useIsNeu;
