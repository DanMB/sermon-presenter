import Cache from '@src/ts/Cache';
import Storage from '@src/ts/Storage';
import create, { UseBoundStore, StoreApi, EqualityChecker, StateListener } from 'zustand';

export interface IPersistConfig {
	id: string | null;
	flush: boolean;
	maxAge: number;
}

export const DefaultPersist: IPersistConfig = {
	id: null,
	flush: false,
	maxAge: 0,
};

export default class Store<T extends object> {
	private _store: UseBoundStore<StoreApi<T>>;
	public get zustand() {
		return this._store;
	}

	private _id: string | null = null;
	private _flush: boolean = false;
	private _maxAge: number = 0;

	constructor(
		state: T,
		{
			id = DefaultPersist.id,
			flush = DefaultPersist.flush,
			maxAge = DefaultPersist.maxAge,
		}: Partial<IPersistConfig> = DefaultPersist
	) {
		this._id = id;
		this._flush = flush;
		this._maxAge = maxAge;

		if (this._id) {
			if (this._flush) {
				if (this._maxAge > 0) {
					Cache.set<T>(`store/${this._id}`, state, this._maxAge);
				} else {
					Storage.set<T>(`store/${this._id}`, state);
				}
			} else {
				if (this._maxAge > 0) {
					state = Cache.get<T>(`store/${this._id}`) ?? state;
				} else {
					state = Storage.get<T>(`store/${this._id}`) ?? state;
				}
			}
		}

		this._store = create<T>(() => state);
	}

	public use = <U>(selector: (state: T) => U, equals?: EqualityChecker<U>): U => {
		return this._store(selector, equals);
	};

	public get = (): T => {
		return this._store.getState();
	};

	public set = (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean) => {
		this._store.setState(partial, replace);

		if (this._id) {
			if (this._maxAge > 0) {
				Cache.set<T>(`store/${this._id}`, this._store.getState(), this._maxAge);
			} else {
				Storage.set<T>(`store/${this._id}`, this._store.getState());
			}
		}
	};

	public sub = (listener: StateListener<T>): (() => void) => {
		return this._store.subscribe(listener);
	};
}
