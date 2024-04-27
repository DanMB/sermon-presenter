<script lang="ts">
	import { ourPraise } from '$lib/OurPraise.svelte';
	import { tabs } from '$lib/Tabs.svelte';
	import type { SetlistEvent } from '$lib/types/Setlists.types';
	import dates from '../../tools/dates';
	import Loader2 from 'lucide-svelte/icons/loader-2';
	import RotateCw from 'lucide-svelte/icons/rotate-cw';

	let setlists: SetlistEvent[] = $state([]);
	let loading = $state(true);
	let location: string | undefined = $state();

	const fetch = () => {
		loading = true;
		ourPraise
			.getEvents({
				location,
			})
			.then(data => {
				loading = false;
				if (data) setlists = data;
			});
	};

	$effect(() => {
		fetch();
	});
</script>

<section>
	<div class="header">
		<h3>Setlists</h3>
		<select bind:value={location} disabled={loading}>
			<option value="aav" selected>Aarhus Vineyard</option>
			<option value="rov">Roskilde Vineyard</option>
		</select>
		<button disabled={loading} onclick={fetch}>
			{#if loading}
				<Loader2 />
			{:else}
				<RotateCw />
			{/if}
		</button>
	</div>
	<ol>
		{#each setlists as setlist}
			<li class:passed={dates.hasPassed(setlist.date)}>
				<button
					class="item"
					disabled={loading}
					onclick={() => {
						tabs.addSetList(setlist);
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

	.header {
		display: flex;
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

	.item {
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

		&:not(:disabled):hover {
			box-shadow: inset 0 0 0 1px var(--color-border);

			.title {
				color: var(--color-primary);
			}
		}

		&:disabled {
			opacity: 0.75;
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
