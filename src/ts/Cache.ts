import { StateUpdater, useState } from 'preact/hooks';
import Storage, { StorageItem } from './Storage';

export type CacheItem<T = StorageItem> = {
	value: T;
	maxAge: number;
	expired: number;
	created: number;
};

export default class Cache {
	public static clean(): void {
		const now = Date.now();

		for (var i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (!key) continue;
			const data = Storage.get<CacheItem>(key);
			if (!data) continue;
			if (data?.created > 0 && data?.expired > 0 && data?.value) {
				if (data.expired <= now) {
					Storage.remove(key);
				}
			}
		}
	}

	public static get<T = StorageItem>(key: string): T | undefined {
		const data = localStorage.getItem(key);
		if (!data) return;
		try {
			const json: CacheItem<T> = JSON.parse(data);

			const now = Date.now();

			if (now > json.expired) {
				this.remove(key);
				return;
			}

			return json.value;
		} catch (e) {
			console.error(`Failed to parse JSON get data for Cache ${key}: `, data);
		}
		return;
	}

	public static set<T = StorageItem>(key: string, value: T, maxAge: number = 36000): void {
		// 10 hours
		try {
			const now = Date.now();

			localStorage.setItem(
				key,
				JSON.stringify({
					value,
					maxAge,
					expired: now + maxAge * 1000,
					created: now,
				})
			);
		} catch (e) {
			console.error(`Failed to parse JSON save data for Cache ${key}: `, value);
		}
	}

	public static remove(key: string): void {
		localStorage.removeItem(key);
	}

	public static use<T = StorageItem>(key: string, initialValue?: T): [T | undefined, (newValue: T) => void] {
		const [storedValue, internalSetValue] = useState<T | undefined>(Cache.get(key) || initialValue);

		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === key) {
				internalSetValue(Cache.get(key));
			}
		};

		window.addEventListener('storage', handleStorageChange);

		const setValue = (newValue: T) => {
			Cache.set(key, newValue);
			internalSetValue(newValue);
		};

		return [storedValue, setValue];
	}
}
