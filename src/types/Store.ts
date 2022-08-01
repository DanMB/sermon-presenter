import create, { UseBoundStore, StoreApi, StateCreator, StateSelector } from 'zustand';

export type StateUsed<T> = {
	[Property in keyof T]: T[keyof T];
};

export type FunctionalState<T> = {
	[Property in keyof T]: () => T[keyof T];
};

export type UseState<T> = {
	[Property in keyof T]: () => T[keyof T];
};

export default abstract class Store<T extends object> {
	public store: UseBoundStore<StoreApi<T>>;
	private _initialState: T | undefined = undefined;
	// private _instance: Store<T> | undefined = undefined;
	// public mapped: (() => T[keyof T])[];

	// public setInstance(instance: Store<T>): void {
	// 	this._instance = instance;
	// }

	// public get instance(): Store<T> {
	// 	if (this._instance === undefined) {
	// 		if (this._instance === undefined) {
	// 			throw new Error('Store instance gotten before being constructed');
	// 		}
	// 	}
	// 	return this._instance;
	// }

	private _keys: string[] = [];
	private _reduced: FunctionalState<T> | undefined;

	constructor(createState: StateCreator<T, [], [], T>) {
		this.store = create<T>(createState);
		this._initialState = this.store.getState();
		this._keys = Object.keys(this._initialState);

		// this._reduced = this._keys.reduce((obj: FunctionalState<T>, name: string) => {
		// 	return { ...obj, [name]: () => this._internalUse(name) };
		// }, {} as FunctionalState<T>);

		// const useState = {...this._initialState};
	}

	// private _internalUse = (key: string): T[keyof T] => {
	// 	return this.store(state => state[key]);
	// };

	private _use = <U>(selector: (state: T) => U): U => {
		return this.store(selector);
	};

	public get state(): T {
		return this.store.getState();
	}

	// public use = (): T => {
	// 	return this._reduced as T;
	// };

	// public use = <U>(selector: (state: T) => U): U => {
	// 	return this.store(selector);
	// };

	public use = <U>(selector: (state: T) => U): U => {
		return this.store(selector);
	};

	public get = (): T => {
		return this.store.getState();
	};
}
