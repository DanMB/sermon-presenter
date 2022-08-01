export interface ReadonlyCustomMap<T> extends Omit<ReadonlyMap<string, T>, 'values' | 'keys'> {
	getValues(): T[];
	getKeys(): string[];
}

export default class CustomMap<T> extends Map<string, T> {
	public readonly: ReadonlyCustomMap<T> = this;

	constructor(obj?: { [key: string]: T }) {
		if (obj) {
			const iterable: [string, T][] = [];
			for (const key in Object.keys(obj)) {
				iterable.push([key, obj[key]]);
			}
			super(iterable);
		} else {
			super();
		}
	}

	public getValues(): T[] {
		return Array.from(this.values());
	}

	public getKeys(): string[] {
		return Array.from(this.keys());
	}

	public mutate(callbackfn: (value: T, key: string) => T | undefined) {
		for (const [key, value] of this) {
			const result = callbackfn(value, key);

			if (result === undefined) {
				this.delete(key);
			} else {
				this.set(key, result);
			}
		}

		return this;
	}
}
