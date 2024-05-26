import type { Page } from './Pages.svelte';

export class PresentationClass {
	public isPresenting = $state<boolean>(false);
	public isCleared = $state<boolean>(true);

	public page = $state<Page | undefined>();
	public slide = $state;

	constructor() {}
}

export const presentation = new PresentationClass();
