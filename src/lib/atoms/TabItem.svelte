<script lang="ts">
	import { Tabs } from '@dan-ui/tabs';
	import type { Snippet } from 'svelte';

	let { value, children } = $props<{ value: string; children: Snippet }>();

	const tabController = Tabs.buildController(value);
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
		border: none;
		border-bottom: 2px solid transparent;
		background: none;
		color: white;

		&:hover {
			background: rgba(255, 255, 255, 0.1);
		}

		&:global([aria-selected="true"]) {
			border-bottom-color: blue;
		}

		:global(svg) {
			height: 1em;
			width: 1em;
		}
	}
</style>
