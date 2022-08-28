import ITabData from '@src/types/ITabData';
import Store from '@src/types/Store';
import CustomMap from '@src/types/CustomMap';
import { newtabUri, UriParts } from '@src/types/URIParts';
import Storage from './Storage';

export interface ITabState {
	tabs: string[];
	active: string;

	setTabs: (tabs: CustomMap<ITabData>) => void;
	remove: (tab: string) => void;
	setActive: (active: string) => void;
	moveActive: (movement: '+' | '-' | number) => void;
}

export class Tabs extends Store<ITabState> {
	public allTabs: CustomMap<ITabData>;

	constructor(presetTabs: ITabData[] = []) {
		const savedTabs = Storage.get<ITabData[]>('tabs') || [];
		const tabs = [...savedTabs, ...presetTabs];

		let active = Storage.get<string>('active_tab');

		const map = new CustomMap<ITabData>();
		for (const tab of tabs) {
			map.set(tab.id, tab);
		}

		if (active && !map.get(active)) active = newtabUri;

		super((set, get) => ({
			tabs: [...tabs.map(tab => tab.id), newtabUri],
			active: active ?? newtabUri,
			setTabs: tabs => {
				this.allTabs = tabs;

				set({
					tabs: tabs.getValues().map(tab => tab.id),
				});
			},

			remove: tab => {
				if (tab === newtabUri) return;

				if (get().tabs.includes(tab)) {
					this.removeTab(tab);

					if (get().active.toString() === tab) {
						get().moveActive(1);
					}
				}
			},

			setActive: active => {
				if (get().tabs.includes(active) || active === newtabUri) {
					this.saveActive(active);

					set({
						active,
					});
				}
			},

			moveActive: movement => {
				const tabs = get().tabs;

				if (movement !== '+' && movement !== '-') {
					let index = movement;
					let maxIndex = tabs.length - 1;

					if (index > maxIndex) index = maxIndex;
					else if (index < 0) index = 0;

					const newTab = tabs[index];
					if (!newTab) return;

					get().setActive(newTab);
				} else {
					let index = get().tabs.findIndex(tab => tab === get().active);

					if (movement === '+') {
						index--;
						if (index < 0) index = tabs.length - 1;
					} else {
						index++;
						if (index + 1 > tabs.length) index = 0;
					}

					const newTab = tabs[index];
					if (!newTab) return;

					get().setActive(newTab);
				}
			},
		}));

		this.allTabs = map;
	}

	public setTab = (tab: ITabData): void => {
		if (!tab) return;
		const isNewTab = !this.allTabs.has(tab.id);
		this.allTabs.set(tab.id, tab);

		if (isNewTab) this.state.setTabs(this.allTabs);
		this.saveTabs();
	};

	public getTab = (uri: string): ITabData | undefined => {
		if (!uri) return;
		return this.allTabs.get(uri);
	};

	public removeTab = (uri: string): void => {
		if (!uri) return;
		const isTab = this.allTabs.has(uri);
		this.allTabs.delete(uri);

		if (isTab) {
			this.state.setTabs(this.allTabs);
			this.saveTabs();
		}
	};

	private saveTabs(): void {
		Storage.set('tabs', this.allTabs.getValues());
	}

	private saveActive(activeTab?: string): void {
		if (!activeTab) activeTab = this.state.active.toString();
		Storage.set('active_tab', activeTab);
	}
}

const TabStore = new Tabs();

export const useTabs = TabStore.use;

export default TabStore;
