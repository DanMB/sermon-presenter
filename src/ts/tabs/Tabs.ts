import Store from '@src/types/Store';
import CustomMap from '@src/types/CustomMap';
import { newtabUri } from '@src/types/URIParts';
import Storage from '../Storage';
import Tab, { ITabConfig, TabUid } from './Tab';

export interface ITabState {
	tabs: TabUid[];
	active: TabUid;
}

export class TabsStore extends Store<ITabState> {
	public map: Map<TabUid, Tab<any>>;

	constructor() {
		super(
			{
				tabs: [newtabUri],
				active: newtabUri,
			},
			{
				id: 'tabs',
			}
		);

		const map = new Map<TabUid, Tab>();
		const state = this.get();
		let adjusted = false;

		for (const tabId of state.tabs) {
			const saved = Storage.get<ITabConfig>(tabId);
			if (saved) {
				map.set(tabId, new Tab(saved));
			} else if (tabId !== newtabUri) {
				const foundI = this.get().tabs.indexOf(tabId);

				if (foundI >= 0) {
					state.tabs = [...this.get().tabs].splice(foundI, 1);
					adjusted = true;
				}
			}
		}

		if (!this.get().tabs.includes(this.get().active)) {
			state.active = newtabUri;
		}

		if (adjusted) {
			this.set(state);
		}

		this.map = map;
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

			this.set({ active: newTab });
		} else {
			let index = this.get().tabs.findIndex(tab => tab === this.get().active);

			if (movement === '+') {
				index--;
				if (index < 0) index = tabs.length - 1;
			} else {
				index++;
				if (index + 1 > tabs.length) index = 0;
			}

			const newTab = tabs[index];
			if (!newTab) return;

			this.set({ active: newTab });
		}
	};

	public remove = (uri: TabUid): void => {
		if (!uri) return;
		const foundI = this.get().tabs.indexOf(uri);
		this.map.delete(uri);

		if (foundI >= 0) {
			const tabs = [...this.get().tabs];
			tabs.splice(foundI, 1);
			if (uri === this.get().active) {
				this.set({
					tabs,
					active: newtabUri,
				});
			} else {
				this.set({
					tabs,
				});
			}
		}
	};

	public getTab = <T = unknown>(uri: TabUid): Tab<T> | undefined => {
		return this.map.get(uri);
	};
}

const Tabs = new TabsStore();

export const useTabs = Tabs.use;

export default Tabs;
