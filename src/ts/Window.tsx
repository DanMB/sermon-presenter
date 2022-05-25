import { h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

export default class Window {
	public static _isNeu: boolean | null = null;
	public static async isNeu(): Promise<boolean> {
		console.log('Window.isNeu', Window._isNeu);
		if (Window._isNeu !== null) {
			return Window._isNeu;
		}

		return new Promise(resolve => {
			Neutralino.app
				.getConfig()
				.then(config => {
					console.log('GOT CONFIG', config, !!config);
					const urlParams = new URLSearchParams(window.location.search);
					Window._isNeu = !!config && urlParams.get('isneu') === 'true';
				})
				.catch(() => {
					console.log('FAILED TO GET CONFIG');
					Window._isNeu = false;
				})
				.finally(() => {
					console.log('FINALLY', Window._isNeu);
					resolve(Window._isNeu ?? false);
				});
		});
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

	constructor() {}
}

export const useIsNeu = Window.useIsNeu;
