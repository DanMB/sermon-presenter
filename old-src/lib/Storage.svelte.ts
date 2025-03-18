import { browser } from '$app/environment';
import { Map } from 'svelte/reactivity';

class StorageClass {
	public map = new Map<string, unknown>();

	constructor() {
		if (browser) {
			const now = Date.now();

			for (let i = 0; i < window.localStorage.length; i++) {
				const key = window.localStorage.key(i);
				if (!key) continue;
				const value = window.localStorage.getItem(key);
				if (!value) continue;

				try {
					const item: {
						expires: number;
						data: unknown;
					} = JSON.parse(value as string);

					if (item.expires > 0 && item.expires < now) {
						window.localStorage.removeItem(key);
					} else {
						this.map.set(key, item.data);
					}
				} catch (e) {
					console.warn('Failed to parse cache value', key);
				}
			}
		}
	}

	public get = <T = unknown>(id: string) => {
		if (!id) return;
		const value = this.map.get(id);
		return value as T;
	};

	public set = <T = unknown>(key: string, data: T, expires = -1) => {
		if (!data) return;
		const value = JSON.stringify({
			expires: expires >= 0 ? Date.now() + expires * 24 * 60 * 60 * 1000 : -1,
			data,
		});
		this.map.set(key, data);
		if (browser) window.localStorage.setItem(key, value);
	};

	public delete = (key: string) => {
		this.map.delete(key);
		if (browser) window.localStorage.removeItem(key);
	};
}

export const storage = new StorageClass();
