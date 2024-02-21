<script lang="ts">
	import TabItem from '$lib/atoms/TabItem.svelte';
	import { Tabs } from '@dan-ui/tabs';
	import Plus from 'lucide-svelte/icons/plus';

	const tabList = Tabs.buildList();
</script>

<nav {...tabList}>
	<TabItem value="tab-1">Tab 1</TabItem>
	<TabItem value="newtab">
		<Plus />
	</TabItem>
</nav>

<style lang="scss">
	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav {
		display: flex;
		align-items: stretch;
		height: 100%;
	}

	div {
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
