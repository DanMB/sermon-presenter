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
		this.load();
	}

	public load = async () => {
		this.loading = false;
	};

	public close = () => {};
}

export class SetListTab extends Tab {
	public songs = $state<SongData[]>([]);

	public load = async () => {
		const data = await ourPraise.getEvent(this.id);
		if (data) {
			this.songs = data;
		}
	};
}

class TabsClass extends Map<string, Tab> {
	public list = $derived(
		Array.from(this.values(), tab => ({
			id: tab.id,
			title: tab.title,
		}))
	);
	constructor() {
		super();
	}

	public addSetList = (setlist: SetlistEvent) => {
		this.set(setlist.id, new SetListTab(setlist));
	};

	public find = <T = Tab>(id: string) => {
		return this.get(id) as T | undefined;
	};
}

export const tabs = new TabsClass();
