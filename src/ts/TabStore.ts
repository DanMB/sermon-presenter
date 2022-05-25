import CustomURI, { UriString } from '@src/types/CustomURI';
import ITabData from '@src/types/ITabData';
import Store from '@src/types/Store';
// import main from '../ts/window';
import CustomMap from '@src/types/CustomMap';
import { newtabUri } from '@src/types/URIParts';
import Storage from './Storage';

export interface ITabState {
	tabs: UriString[];
	active: CustomURI;
	isPresenting: boolean;
	presenting?: CustomURI;

	setTabs: (tabs: CustomMap<ITabData>) => void;
	setActive: (active: UriString) => void;
	setIsPresenting: (isPresenting: boolean) => void;
	setPresenting: (presenting?: UriString) => void;
}

export class Tabs extends Store<ITabState> {
	public allTabs: CustomMap<ITabData>;

	constructor(presetTabs: ITabData[] = []) {
		const savedTabs = Storage.get<ITabData[]>('tabs') || [];
		const tabs = [...savedTabs, ...presetTabs];

		let active = Storage.get<UriString>('active_tab');

		const map = new CustomMap<ITabData>();
		for (const tab of tabs) {
			map.set(tab.uri, tab);
		}

		if (active && !map.get(active)) active = newtabUri;

		super((set, get) => ({
			tabs: tabs.map(tab => tab.uri),
			active: new CustomURI(active ?? newtabUri),
			isPresenting: false,
			presenting: undefined,
			setTabs: tabs => {
				this.allTabs = tabs;

				set({
					tabs: tabs.getValues().map(tab => tab.uri),
				});
			},

			setActive: active => {
				const uri = new CustomURI(active);
				const uriString = uri.toString();

				if (get().tabs.includes(uriString) || uriString === newtabUri) {
					this.saveActive(uriString);

					set({
						active: uri,
					});
				}
			},
			setIsPresenting: isPresenting => {
				if (isPresenting) {
					set({
						isPresenting,
					});
				} else {
					set({
						isPresenting,
						presenting: undefined,
					});
				}
			},
			setPresenting: presenting => {
				set({
					presenting: presenting ? new CustomURI(presenting) : undefined,
				});
			},
		}));

		this.allTabs = map;
	}

	public setTab = (tab: ITabData): void => {
		if (!tab) return;
		const isNewTab = !this.allTabs.has(tab.uri);
		this.allTabs.set(tab.uri, tab);

		if (isNewTab) this.state.setTabs(this.allTabs);
		this.saveTabs();
	};

	public getTab = (uri: UriString): ITabData | undefined => {
		if (!uri) return;
		return this.allTabs.get(uri);
	};

	public removeTab = (uri: UriString): void => {
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

	private saveActive(activeTab?: UriString): void {
		if (!activeTab) activeTab = this.state.active.toString();
		Storage.set('active_tab', activeTab);
	}
}

const TabStore = new Tabs();

export const useTabs = TabStore.use;

export default TabStore;
