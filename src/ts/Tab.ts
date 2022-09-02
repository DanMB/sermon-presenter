import ISetList from '@src/types/ISetList';
import Store from '@src/types/Store';

export type TabUid = string;

export enum TabTypes {
	SETLIST = 'setlist',
	NEWTAB = 'newtab',
}

export interface ITabConfig<T = unknown> {
	id: TabUid;
	title: string;
	data: T;
	type: TabTypes;
	active: string;
}

export type IShallowTab = Omit<ITabConfig, 'data'>;

export default class Tab<T = unknown> extends Store<ITabConfig<T>> {
	private _data: T;
	public get data() {
		return this._data;
	}

	constructor(config: ITabConfig<T>) {
		super(config);

		this._data = config.data;
	}

	public static isSetList(data: any): data is ISetList {
		return data?.songs;
	}
}
