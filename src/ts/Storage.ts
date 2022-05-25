import { StateUpdater, useState } from 'preact/hooks';

export type StorageItem = Record<string, unknown> | string | unknown[];

export default class Storage {
	public static get<T = StorageItem>(key: string): T | undefined {
		const data = localStorage.getItem(key);
		if (!data) return;
		try {
			return JSON.parse(data) as T;
		} catch (e) {
			console.error(`Failed to parse JSON data for Storage ${key}: `, data);
		}
		return;
	}

	public static set<T = StorageItem>(key: string, value: T): void {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (e) {
			console.error(`Failed to parse JSON data for Storage ${key}: `, value);
		}
	}

	public static remove(key: string): void {
		localStorage.removeItem(key);
	}

	public static use<T = StorageItem>(key: string, initialValue?: T): [T | undefined, (newValue: T) => void] {
		const [storedValue, internalSetValue] = useState<T | undefined>(Storage.get(key) || initialValue);

		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === key) {
				internalSetValue(Storage.get(key));
			}
		};

		window.addEventListener('storage', handleStorageChange);

		const setValue = (newValue: T) => {
			Storage.set(key, newValue);
			internalSetValue(newValue);
		};

		return [storedValue, setValue];
	}
}
