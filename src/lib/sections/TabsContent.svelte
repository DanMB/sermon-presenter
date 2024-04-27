<script lang="ts">
	import { tabs } from '$lib/Tabs.svelte';
	import NewTab from '$lib/sections/NewTab.svelte';
	import SetList from './SetList.svelte';
</script>

<main>
	{#each tabs.list as tab}
		<SetList id={tab.id} />
	{/each}
	<NewTab />
</main>

<style lang="scss">
	main {
		background-color: hsl(var(--muted) / 0.4);
		flex: 1 1 auto;
		padding: 1.5rem 2rem;
	}
</style>
