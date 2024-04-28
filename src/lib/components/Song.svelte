<script lang="ts">
	import type { SongData } from '$lib/types/Setlists.types';

	const { data }: { data: SongData } = $props();
</script>

<section>
	<h3>{data.title}</h3>
	<ol>
		{#each data.slides as slide}
			<li>
				{slide}
			</li>
		{/each}
	</ol>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
	}
</style>
