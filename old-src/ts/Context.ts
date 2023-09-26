import create, { UseBoundStore, StoreApi } from 'zustand';

export type Store<T = any> = {
	value: T;
};

export default class Context<T = any> {
	private _store: UseBoundStore<StoreApi<Store<T>>>;
	public get store() {
		return this._store;
	}

	constructor(value: T) {
		this._store = create<Store<T>>(() => ({
			value,
		}));
	}

	public use = (): T => {
		return this._store(state => state.value);
	};

	public get = (): T => {
		return this._store.getState().value;
	};

	public set = (value: T) => {
		this._store.setState({
			value,
		});
	};
}
