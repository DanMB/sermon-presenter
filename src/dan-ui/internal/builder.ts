import type { Action } from 'svelte/action';
import type { HTMLAttributes } from 'svelte/elements';

export function builder<T extends HTMLElement>({
	props = {},
	action,
}: { props?: HTMLAttributes<T>; action?: Action<T> } = {}) {
	if (action) {
		Object.defineProperty(props, 'use:action', {
			value: action,
			enumerable: false,
		});
	}

	return props;
}
