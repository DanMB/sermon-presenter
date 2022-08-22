import { appWindow } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/tauri';
import { getTauriVersion, getVersion } from '@tauri-apps/api/app';
import Cache from './Cache';

export default class Client {
	public static isTau: boolean | undefined = undefined;

	public static versions = {
		tauri: '',
		client: '',
		app: '',
	};

	public static async init(): Promise<void> {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			if (typeof window.__TAURI__ !== 'undefined' && window.__TAURI__) {
				Client.isTau = true;
				this.setup()
					.then(() => {
						resolve();
					})
					.catch(() => {
						reject();
					});
			} else {
				Client.isTau = false;
				reject();
			}
		});
	}

	private static setup = async () => {
		Cache.enabled = import.meta.env.APP_CACHE ?? true;

		this.versions = {
			tauri: await getTauriVersion(),
			// @ts-ignore
			client: __VERSION__,
			app: await getVersion(),
		};

		setTimeout(async () => {
			appWindow.show();
			if (appWindow.label === 'control') {
				invoke('close_splash');
			}
		}, 800);
	};

	public static destroy = () => {
		// if (this._ws) this._ws.removeEventListener('message', this.onMessage);
	};
}
