import { getContext, onMount, setContext } from 'svelte';
import type { Orientation } from '../types';
import { builder } from '../builder';
import { id } from '../id';

export type CreateTabsProps = {
	value?: string;
	orientation?: Orientation;
	activateOnFocus?: boolean;
	loop?: boolean;
};

export class Tabs {
	public active = $state<string | undefined>();
	public orientation: Orientation;
	public loop: boolean;
	public options = $state<string[]>([]);

	public static get current() {
		return (
			getContext<Tabs | undefined>(id('tabs')) ?? {
				active: undefined,
				orientation: 'horizontal',
				loop: false,
				options: [],
				addOption: (_: string) => {},
				removeOption: (_: string) => {},
			}
		);
	}

	constructor(props: CreateTabsProps = {}) {
		this.active = props.value;
		this.orientation = props.orientation ?? 'horizontal';
		this.loop = props.loop ?? false;

		setContext<Tabs>(id('tabs'), this);
	}

	public static buildList = () => {
		const tab = Tabs.current;

		const onKeyDown = (event: KeyboardEvent) => {
			const list = event.currentTarget as HTMLElement;

			let move = 0;

			if (tab.orientation === 'horizontal') {
				if (event.key === 'ArrowLeft') move = -1;
				else if (event.key === 'ArrowRight') move = 1;
			} else {
				if (event.key === 'ArrowUp') move = -1;
				else if (event.key === 'ArrowDown') move = 1;
			}

			if (move === 0) return;

			const items = Array.from(
				list.querySelectorAll<HTMLElement>(`[role="tab"][aria-constrols^="${id('tab-controller', '')}"]`)
			);
			const index = items.findIndex(item => item.getAttribute('aria-selected') === 'true');
			const nextIndex = index + move;
			if (nextIndex >= items.length) {
				if (tab.loop) items[0].click();
			} else if (nextIndex < 0) {
				if (tab.loop) items[items.length - 1].click();
			} else {
				items[nextIndex].click();
			}
		};

		return builder({
			props: {
				role: 'tablist',
				'aria-orientation': tab.orientation,
				onkeydown: onKeyDown,
			},
		});
	};

	public static buildController = (value: string | undefined) => {
		const tab = Tabs.current;

		return builder({
			props: {
				role: 'tab',
				get 'aria-selected'() {
					return tab.active === value;
				},
				get tabindex() {
					return tab.active === value ? 0 : -1;
				},
				'aria-controls': id('tab-panel', value),
				id: id('tab-controller', value),
				onclick: () => {
					tab.active = value;
				},
			},
		});
	};

	public static buildPanel = (value: string | undefined) => {
		const tab = Tabs.current;

		return builder({
			props: {
				role: 'tab',
				get hidden() {
					return tab.active !== value;
				},
				'aria-labelledby': id('tab-controller', value),
				id: id('tab-panel', value),
				get tabindex() {
					return tab.active === value ? 0 : -1;
				},
			},
		});
	};
}
