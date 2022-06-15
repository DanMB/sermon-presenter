import CustomMap, { ReadonlyCustomMap } from '@src/types/CustomMap';
import { h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

export default class Window {
	private static _isNeu: boolean | null = null;
	public static async isNeu(): Promise<boolean> {
		console.log('Window.isNeu', Window._isNeu);
		if (Window._isNeu !== null) {
			return Window._isNeu;
		}

		// @ts-ignore
		if (!window.REF_PORT) {
			Window._isNeu = false;
			return Window._isNeu;
		}

		// @ts-ignore
		if (window.NEU_LOADED) {
			Window._isNeu = true;
			return Window._isNeu;
		} else {
			return new Promise(resolve => {
				window.addEventListener('onNeuLoaded', () => {
					Window._isNeu = typeof Neutralino !== 'undefined';
					resolve(Window._isNeu);
				});
			});
		}
	}

	public static useIsNeu(): boolean {
		const [isNeuState, setIsNeuState] = useState<boolean>(Window._isNeu ?? false);

		useEffect(() => {
			Window.isNeu()
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

	constructor() {}
}

export const useIsNeu = Window.useIsNeu;
