<script lang="ts">
	import { pages } from '$lib/Pages.svelte';
	import Song from '$lib/components/Song.svelte';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	let { data } = $props();
	const page = $derived(pages.get<'setlist'>(data.id)!);
</script>

{#key page.id}
	{#if page.loading}
		<div class="loader">
			<LoaderCircle />
		</div>
	{:else if page.data}
		{#each page.data as song (song.id)}
			<Song data={song} />
		{/each}
	{/if}
{/key}

<style lang="scss">
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
