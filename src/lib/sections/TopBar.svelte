<script lang="ts">
	import { tabs } from '$lib/Tabs.svelte';
	import TabItem from '$lib/atoms/TabItem.svelte';
	import { Tabs } from '$lib/core/tabs';
	import Plus from 'lucide-svelte/icons/plus';

	const tabList = Tabs.buildList();
</script>

<nav {...tabList}>
	{#each tabs.list as tab}
		<TabItem value={tab.id}>
			<div>{tab.title}</div>
		</TabItem>
	{/each}
	<TabItem value="newtab">
		<Plus />
	</TabItem>
</nav>

<style lang="scss">
	nav {
		display: flex;
		align-items: stretch;
		height: 100%;
		flex: 0 0 0;
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
