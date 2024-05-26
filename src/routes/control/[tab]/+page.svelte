<script lang="ts">
	import { pages } from '$lib/Pages.svelte';
	import Song from '$lib/components/Song.svelte';
	import Loader2 from 'lucide-svelte/icons/loader-2';

	const { id }: { id: string } = $props();

	const page = pages.get<'setlist'>(id);
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<main role="tabpanel" tabindex="0" {id}>
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

<style lang="scss">
	main {
		flex: 1 1 auto;
		min-height: 0;
		overflow: auto;
		padding: 1.5rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		gap: 1rem;
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
