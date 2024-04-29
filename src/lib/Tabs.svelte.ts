import { browser } from '$app/environment';
import { ourPraise } from './OurPraise.svelte';
import { storage } from './Storage.svelte';
import type { SongData } from './types/Setlists.types';
import { Map } from 'svelte/reactivity';

export type TabTypes = {
	setlist: SongData[];
};

export type TabConstructor<T extends keyof TabTypes = keyof TabTypes> = { id: string; title?: string; type: T };

export class Tab<T extends keyof TabTypes = keyof TabTypes> {
	public readonly id: string;
	public readonly type: T;

	public title = $state<string>('');
	public loading = $state<boolean>(true);
	public data = $state<TabTypes[T] | undefined>();

	constructor({ id, title, type }: TabConstructor<T>) {
		this.id = id;
		this.title = title || id;
		this.type = type;
	}

	public load = async () => {
		this.loading = true;
		if (this.type === 'setlist') {
			const data = await ourPraise.getEvent(this.id);
			if (data) {
				this.title = data.title;
				this.data = data.songs;
			}
		}
		this.loading = false;
	};

	public close = () => {};

	public focus = () => {};
}

class TabsClass {
	public map = new Map<string, Tab>();
	public list = $derived(
		Array.from(this.map.values(), tab => ({
			id: tab.id,
			title: tab.title,
		}))
	);

	constructor() {
		if (browser) {
			const constructors = storage.get<TabConstructor[]>('tabs') ?? [];
			for (const constructor of constructors) {
				this.add(constructor);
			}

			window.addEventListener('beforeunload', () => {
				storage.set(
					'tabs',
					Array.from(this.map.values(), tab => ({
						id: tab.id,
						title: tab.title,
						type: tab.type,
					}))
				);
			});
		}
	}

	public add = (constructor: TabConstructor) => {
		if (!constructor.id) return;
		const existing = this.get(constructor.id);
		if (existing) {
			existing.load();
			return;
		}

		const created = new Tab(constructor);
		this.map.set(constructor.id, created);
		created.load();
		created.focus();
	};

	public get = <T extends keyof TabTypes = keyof TabTypes>(id: string) => {
		return this.map.get(id) as Tab<T> | undefined;
	};
}

export const tabs = new TabsClass();
