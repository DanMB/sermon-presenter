<script lang="ts">
	import { tabs } from '$lib/Tabs.svelte';
	import TabItem from '$lib/atoms/TabItem.svelte';
	import { Tabs } from '$lib/core/tabs';
	import Plus from 'lucide-svelte/icons/plus';

	const tabList = Tabs.buildList();
</script>

<header>
	<nav {...tabList}>
		{#each tabs.list as tab}
			<TabItem value={tab.id}>
				{tab.title}
			</TabItem>
		{/each}
		<TabItem value="newtab">
			<Plus />
		</TabItem>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: stretch;
		height: 100%;
		flex: 0 0 0;
		border-bottom: 1px solid hsl(var(--border));
		padding: 0.5rem 0.5rem;
		gap: 0.25rem;
	}

	nav {
		display: flex;
		align-items: stretch;
		height: 100%;
		gap: 0.25rem;
	}
</style>
