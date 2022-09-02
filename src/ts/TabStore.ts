import ITabData from '@src/types/ITabData';
import Store from '@src/types/Store';
import CustomMap from '@src/types/CustomMap';
import { newtabUri, UriParts } from '@src/types/URIParts';
import Storage from './Storage';
import Tab, { IShallowTab, ITabConfig, TabUid } from './Tab';

export interface ITabState {
	tabs: IShallowTab[];
	active: TabUid;

	// setTabs: (tabs: CustomMap<ITabData>) => void;
	// remove: (tab: string) => void;
	// setActive: (active: string) => void;
	// moveActive: (movement: '+' | '-' | number) => void;
}

export class Tabs extends Store<ITabState> {
	public allTabs: CustomMap<Tab>;

	constructor() {
		const savedTabs = Storage.get<IShallowTab[]>('shallow_tabs') || [];
		const validTabs = [];

		let active = Storage.get<string>('active_tab');

		const map = new CustomMap<Tab>();
		for (const tab of savedTabs) {
			const savedConfig = Storage.get<ITabConfig>(tab.id);

			if (savedConfig) {
				map.set(tab.id, new Tab(savedConfig));
				validTabs.push(tab);
			}
		}

		if (active && !map.get(active)) active = newtabUri;

		super({
			tabs: validTabs,
			active: active ?? newtabUri,
			// setTabs: tabs => {
			// 	this.allTabs = tabs;

			// 	set({
			// 		tabs: tabs.getValues().map(tab => tab.id),
			// 	});
			// },

			// remove: tab => {
			// 	if (tab === newtabUri) return;

			// 	if (get().tabs.includes(tab)) {
			// 		this.removeTab(tab);

			// 		if (get().active.toString() === tab) {
			// 			get().moveActive(1);
			// 		}
			// 	}
			// },

			// setActive: active => {
			// 	if (get().tabs.includes(active) || active === newtabUri) {
			// 		this.saveActive(active);

			// 		set({
			// 			active,
			// 		});
			// 	}
			// },

			// moveActive: movement => {
			// 	const tabs = get().tabs;

			// 	if (movement !== '+' && movement !== '-') {
			// 		let index = movement;
			// 		let maxIndex = tabs.length - 1;

			// 		if (index > maxIndex) index = maxIndex;
			// 		else if (index < 0) index = 0;

			// 		const newTab = tabs[index];
			// 		if (!newTab) return;

			// 		get().setActive(newTab);
			// 	} else {
			// 		let index = get().tabs.findIndex(tab => tab === get().active);

			// 		if (movement === '+') {
			// 			index--;
			// 			if (index < 0) index = tabs.length - 1;
			// 		} else {
			// 			index++;
			// 			if (index + 1 > tabs.length) index = 0;
			// 		}

			// 		const newTab = tabs[index];
			// 		if (!newTab) return;

			// 		get().setActive(newTab);
			// 	}
			// },
		});

		this.allTabs = map;
	}

	public move = (movement: '+' | '-' | number) => {
		const tabs = this.get().tabs;

		if (movement !== '+' && movement !== '-') {
			let index = movement;
			let maxIndex = tabs.length - 1;

			if (index > maxIndex) index = maxIndex;
			else if (index < 0) index = 0;

			const newTab = tabs[index];
			if (!newTab) return;

			this.set({ active: newTab.id });
		} else {
			let index = this.get().tabs.findIndex(tab => tab.id === this.get().active);

			if (movement === '+') {
				index--;
				if (index < 0) index = tabs.length - 1;
			} else {
				index++;
				if (index + 1 > tabs.length) index = 0;
			}

			const newTab = tabs[index];
			if (!newTab) return;

			this.set({ active: newTab.id });
		}
	};

	public remove = (uri: string): void => {
		if (!uri) return;
		const foundI = this.get().tabs.findIndex(tab => tab.id === uri);
		this.allTabs.delete(uri);

		if (foundI >= 0) {
			this.set({
				tabs: [...this.get().tabs].splice(foundI, 1),
			});
			this.saveTabs();
		}
	};

	private saveTabs(): void {
		Storage.set('tabs', this.allTabs.getValues());
	}

	private saveActive(activeTab?: string): void {
		if (!activeTab) activeTab = this.get().active.toString();
		Storage.set('active_tab', activeTab);
	}
}

const TabStore = new Tabs();

export const useTabs = TabStore.use;

export default TabStore;
