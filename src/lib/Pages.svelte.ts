import { browser } from '$app/environment';
import { ourPraise } from './OurPraise.svelte';
import { storage } from './Storage.svelte';
import type { SongData } from './types/Setlists.types';
import { Map } from 'svelte/reactivity';

export type PageTypes = {
	setlist: SongData[];
};

export type PageConstructor<T extends keyof PageTypes = keyof PageTypes> = {
	id: string;
	title?: string;
	type: T;
	active?: boolean;
};

export class Page<T extends keyof PageTypes = keyof PageTypes> {
	public readonly id: string;
	public readonly type: T;

	public title = $state<string>('');
	public loading = $state<boolean>(true);
	public data = $state<PageTypes[T] | undefined>();

	constructor({ id, title, type }: PageConstructor<T>) {
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
}

class PagesClass {
	public map = new Map<string, Page>();
	public active = $state<Page | undefined>();
	public list = $derived(
		Array.from(this.map.values(), tab => ({
			id: tab.id,
			title: tab.title,
		}))
	);

	constructor() {
		if (browser) {
			const constructors = storage.get<PageConstructor[]>('pages') ?? [];
			for (const constructor of constructors) {
				this.add(constructor);
			}

			window.addEventListener('beforeunload', () => {
				storage.set(
					'pages',
					Array.from(this.map.values(), tab => ({
						id: tab.id,
						title: tab.title,
						type: tab.type,
						active: tab.id === this.active?.id,
					}))
				);
			});
		}
	}

	public add = (constructor: PageConstructor) => {
		if (!constructor.id) return;
		const existing = this.get(constructor.id);
		if (existing) {
			existing.load();
			return;
		}

		const created = new Page(constructor);
		this.map.set(constructor.id, created);
		created.load();
		console.log(constructor);
		if (constructor.active !== false) this.active = created;
	};

	public get = <T extends keyof PageTypes = keyof PageTypes>(id: string | undefined) => {
		if (!id) return;
		return this.map.get(id) as Page<T> | undefined;
	};
}

export const pages = new PagesClass();
