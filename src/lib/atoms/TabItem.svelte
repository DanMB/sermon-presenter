<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { page } from '$app/stores';

	let { value, children }:{ value?: string; children: Snippet } = $props();

	let active = $state(false);

	onMount(() => {
		const unsub = page.subscribe((newPage) => {
			active = newPage.params.tab === value;
		});

		return () => {
			unsub();
		}
	})
</script>

<a class="button" href={value ? `/control/${value}` : '/control'} role="tab" aria-selected={active} aria-controls={value} tabindex={active ? 0 : -1}>
	{@render children()}
</a>

<style lang="scss">
	a {
		color: hsl(var(--muted-foreground));
		border-radius: calc(var(--radius) - 2px);

		&:hover {
			color: hsl(var(--foreground));
		}

		&:global([aria-selected="true"]) {
			background-color: hsl(var(--muted));
			color: hsl(var(--foreground));
		}

		/* &:global(span) {
			width: 12em;
		} */
	}
</style>
