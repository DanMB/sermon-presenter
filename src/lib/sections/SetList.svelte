<script lang="ts">
	import { tabs } from '$lib/Tabs.svelte';
	import Song from '$lib/components/Song.svelte';
	import { Tabs } from '$lib/core/tabs';
	import Loader2 from 'lucide-svelte/icons/loader-2';

	const { id }: { id: string } = $props();

	const tabPanel = Tabs.buildPanel(id);
	const tab = tabs.get<'setlist'>(id);
</script>

{#if tab}
	<main {...tabPanel}>
		{#if tab.loading}
			<div class="loader">
				<Loader2 />
			</div>
		{:else if tab.data}
			{#each tab.data as song}
				<Song data={song} />
			{/each}
		{/if}
	</main>
{/if}

<style lang="scss">
	main {
		background-color: hsl(var(--muted) / 0.4);
		flex: 1 1 auto;
		padding: 1.5rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.loader {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		:global(svg) {
			height: 2rem;
			width: 2rem;
			color: hsl(var(--muted-foreground));
		}
	}
</style>
