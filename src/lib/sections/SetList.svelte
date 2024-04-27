<script lang="ts">
	import { SetListTab, tabs } from '$lib/Tabs.svelte';
	import { Tabs } from '$lib/core/tabs';

	const { id }: { id: string } = $props();

	const tabPanel = Tabs.buildPanel(id);
	const tab = tabs.find<SetListTab>(id);
</script>

{#if tab}
	<section {...tabPanel}>
		{#each tab.songs as song}{/each}
	</section>
{/if}

<style lang="scss">
	section {
		flex: 1 1 auto;
	}
</style>
