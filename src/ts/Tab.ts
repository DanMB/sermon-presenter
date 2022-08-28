import ISetList from '@src/types/ISetList';

export enum TabTypes {
	SETLIST = 'setlist',
}

export interface ITabConfig<D = ISetList> {
	id?: string;
	name?: string;
	data: D;
	type?: TabTypes;
	active?: string;
}

export default class Tab<D = ISetList> {
	private _data: D;
	public get data() {
		return this._data;
	}

	private _id: string;
	public get id() {
		return this._id;
	}

	private _name: string;
	public get name() {
		return this._name;
	}

	private _active: string;
	public get active() {
		return this._active;
	}

	private _type: TabTypes;
	public get type() {
		return this._type;
	}

	constructor({ id, name, data, type, active }: ITabConfig<D>) {
		this._data = data;

		if (this.isSetList(data)) {
			this._name = name ?? data.title;
		}
	}

	private isSetList(data: any): data is ISetList {
		return data?.songs;
	}
}
