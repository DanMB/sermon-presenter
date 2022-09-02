import create, { UseBoundStore, StoreApi, StateCreator, EqualityChecker, StateSelector } from 'zustand';

export default class Store<T extends object> {
	private _store: UseBoundStore<StoreApi<T>>;
	public get zustand() {
		return this._store;
	}

	constructor(state: T) {
		this._store = create<T>(() => state);
	}

	public use = (selector: StateSelector<T, any>, equals?: EqualityChecker<T>): T => {
		return this._store(selector, equals);
	};

	public get = (): T => {
		return this._store.getState();
	};

	public set = (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean) => {
		this._store.setState(partial, replace);
	};
}
