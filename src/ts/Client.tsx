import { appWindow } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/tauri';

export default class Client {
	public static isTau: boolean | undefined = undefined;

	public static async init(): Promise<void> {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			if (typeof window.__TAURI__ !== 'undefined' && window.__TAURI__) {
				Client.isTau = true;
				this.setup();
				resolve();
			} else {
				Client.isTau = false;
				reject();
			}
		});
	}

	private static setup = () => {
		setTimeout(async () => {
			appWindow.show();
			if (appWindow.label === 'control') {
				invoke('close_splash');
			}
		}, 500);
	};

	public static destroy = () => {
		// if (this._ws) this._ws.removeEventListener('message', this.onMessage);
	};
}
