import { appWindow } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/tauri';
import { getTauriVersion, getVersion } from '@tauri-apps/api/app';
import Cache from './Cache';
import OurPraise from './OurPraise';

export default class Client {
	public static isTau: boolean | undefined = undefined;

	public static versions = {
		tauri: '',
		client: window.__VERSION__,
		app: '',
	};

	public static async init(): Promise<void> {
		return new Promise((resolve, reject) => {
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
				this.setup();
				reject();
			}
		});
	}

	private static setup = async () => {
		Cache.enabled = !!(import.meta.env.APP_CACHE ?? true);

		OurPraise.init({
			apiKey: 'AIzaSyCBfNSkzwlXjavTRNq-TmVo7QpcHrZYvgE',
			authDomain: 'ourpraise-fb.firebaseapp.com',
			projectId: 'ourpraise-fb',
			storageBucket: 'ourpraise-fb.appspot.com',
			messagingSenderId: '485823144275',
			appId: '1:485823144275:web:a6eae91b382d7ebefc41a6',
		});

		if (!Client.isTau) return;

		this.versions.tauri = await getTauriVersion();
		this.versions.app = await getVersion();

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

	public static getLabel = () => {
		let label = 'control';
		if (Client.isTau) {
			if (appWindow.label) label = appWindow.label;
		} else {
			const query = new URLSearchParams(window.location.search);
			const queryLabel = query.get('label');
			if (queryLabel) label = queryLabel;
		}
		return label;
	};
}
