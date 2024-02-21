import { getTauriVersion, getVersion } from '@tauri-apps/api/app';
import { appWindow } from '@tauri-apps/api/window';

export class ClientInstance {
	public isTauri = $state(false);

	public tauriVersion = $state('');
	public appVersion = $state('');
	public clientVersion = $state(window.__VERSION__);

	constructor() {
		this.isTauri = typeof window.__TAURI__ !== 'undefined' && !!window.__TAURI__;
	}

	public loadVersions = async () => {
		if (!this.isTauri) return;

		this.tauriVersion = await getTauriVersion();
		this.appVersion = await getVersion();

		appWindow.show();
	};
}

export const client = new ClientInstance();
