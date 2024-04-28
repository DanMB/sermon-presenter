import { ourPraise } from './OurPraise.svelte';
import type { SetlistEvent, SongData } from './types/Setlists.types';
import { Map } from 'svelte/reactivity';

export class Tab {
	public loading = $state<boolean>(true);
	public readonly id: string;
	public title = $state<string>('');

	constructor({ id, title }: { id: string; title?: string }) {
		this.id = id;
		this.title = title || id;
	}

	public close = () => {};
}

export class SetListTab extends Tab {
	public songs = $state<SongData[]>([]);

	constructor(setlist: SetlistEvent) {
		super(setlist);
		this.load();
	}

	public load = async () => {
		console.log('LOAD2');
		const data = await ourPraise.getEvent(this.id);
		if (data) {
			this.title = data.title;
			this.songs = data.songs;
		}
		this.loading = false;
	};
}

class TabsClass {
	public map = new Map<string, Tab>();
	public list = $derived(
		Array.from(this.map.values(), tab => ({
			id: tab.id,
			title: tab.title,
		}))
	);

	constructor() {}

	public addSetList = (setlist: SetlistEvent) => {
		this.map.set(setlist.id, new SetListTab(setlist));
	};

	public get = <T = Tab>(id: string) => {
		return this.map.get(id) as T | undefined;
	};
}

export const tabs = new TabsClass();
