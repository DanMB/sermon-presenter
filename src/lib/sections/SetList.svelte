<script lang="ts">
	import { pages } from '$lib/Pages.svelte';
	import Song from '$lib/components/Song.svelte';
	import { Tabs } from '$lib/core/tabs';
	import Loader2 from 'lucide-svelte/icons/loader-2';

	const { id }: { id: string } = $props();

	const tabPanel = Tabs.buildPanel(id);
	const page = pages.get<'setlist'>(id);
</script>

{#if page}
	<main {...tabPanel}>
		{#if page.loading}
			<div class="loader">
				<Loader2 />
			</div>
		{:else if page.data}
			{#each page.data as song}
				<Song data={song} />
			{/each}
		{/if}
	</main>
{/if}

<style lang="scss">
	main {
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
