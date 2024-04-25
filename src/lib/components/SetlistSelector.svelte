<script lang="ts">
	import { ourPraise } from '$lib/OurPraise.svelte';
	import type { SetlistEvent } from '$lib/types/Setlists.types';
	import { onMount } from 'svelte';
	import dates from '../../tools/dates';

	let setlists: SetlistEvent[] = $state([]);
	let loading = $state(true);

	onMount(() => {
		ourPraise.getAllEvents().then(data => {
			loading = false;
			if (data) setlists = data;
		});
	});
</script>

<section>
	<ol>
		{#each setlists as setlist}
			<li class:passed={dates.hasPassed(setlist.date)}>
				<button
					onclick={() => {
						console.log(setlist.id);
					}}
				>
					<span class="title">{setlist.title || 'NULL'}</span>
					<span class="date">{dates.readable(setlist.date)}</span>
					<span class="songs">{setlist.songs}</span>
				</button>
			</li>
		{/each}
	</ol>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
	}

	ol {
		list-style: none;
		padding: 0;
		margin: 0;

		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: start;
	}

	li {
		margin: 0;
		padding: 0;
		display: flex;
	}

	button {
		border: 0;
		background: none;

		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		gap: 1.5em;
		padding: 0.5rem 1rem;
		border-radius: 6px;

		&:hover {
			box-shadow: inset 0 0 0 1px var(--color-border);

			.title {
				color: var(--color-primary);
			}
		}
	}

	.passed {
		color: var(--color-faded-text);
	}

	.title {
		flex-grow: 1;
		font-weight: var(--bold-weight);
	}

	.date,
	.length {
		font-family: var(--mono-font);
		font-size: 0.9em;
		color: var(--color-faded-text);
	}
</style>
