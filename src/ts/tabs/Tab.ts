import ISetList from '@src/types/ISetList';
import Store from '@src/types/Store';
import OurPraise from '../OurPraise';

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
	constructor(config: ITabConfig<T>) {
		super(config, {
			id: config.id,
		});

		const data = config.data;

		if (Tab.isSetList(data)) {
			if (data.id) {
				OurPraise.get()
					?.event(data.id)
					.then(newData => {
						if (newData) {
							this.set({
								title: newData.title,
								data: {
									...newData,
								},
							});
						}
					});
			}
		}
	}

	public static isSetList(data: any): data is ISetList {
		return data?.songs;
	}
}