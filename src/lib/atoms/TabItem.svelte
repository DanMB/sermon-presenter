<script lang="ts">
	import { Tabs } from '@dan-ui/tabs';
	import type { Snippet } from 'svelte';

	let { value, children } = $props<{ value: string; children: Snippet }>();

	let tabController = Tabs.buildController(value);
</script>

<button {...tabController}>
	{@render children()}
</button>

<style lang="scss">

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.3em 1em;

		:global(svg) {
			height: 1em;
			width: 1em;
		}
	}
</style>
