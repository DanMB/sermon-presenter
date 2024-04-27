<script lang="ts">
	import { Tabs } from '$lib/core/tabs';
	import type { Snippet } from 'svelte';

	let { value, children }:{ value: string; children: Snippet } = $props();

	const tabController = Tabs.buildController(value);
</script>

<button {...tabController}>
	{@render children()}
</button>

<style lang="scss">
	button {
		color: hsl(var(--muted-foreground));
		border-radius: calc(var(--radius) - 2px);

		&:hover {
			color: hsl(var(--foreground));
		}

		&:global([aria-selected="true"]) {
			background-color: hsl(var(--muted));
			color: hsl(var(--foreground));
		}
	}
</style>
