<script lang="ts">
	import OurPraise, { type EventListItem } from '$lib/core/ourpraise';
	import { pages } from '$lib/pages.svelte';
	import { storage } from '$lib/storage.svelte';
	import dates from '$lib/tools/dates';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import RotateCw from 'lucide-svelte/icons/rotate-cw';

	let eventlist: EventListItem[] = $state([]);
	let loading = $state(true);
	let location: string = $state(storage.get('event-location') || 'aav');

	$effect(() => {
		storage.set('event-location', location);
	});

	const fetch = () => {
		loading = true;
		OurPraise.getEvents({
			location
		}).then((data) => {
			console.log(data)
			loading = false;
			if (data) eventlist = data;
		});
	};
	console.log('load')

	$effect(() => {
		fetch();
	});
</script>

<section>
	<h1>OurPresenter</h1>
	<div class="selector">
		<div class="header">
			<h3>Setlists</h3>
			<select class="select" bind:value={location} disabled={loading}>
				<option value="aav">Aarhus Vineyard</option>
				<option value="rov">Roskilde Vineyard</option>
			</select>
			<button class="button reload" disabled={loading} onclick={fetch}>
				{#if loading}
					<LoaderCircle />
				{:else}
					<RotateCw />
				{/if}
			</button>
		</div>

		{#if eventlist.length > 0}
			<ol>
				{#each eventlist as item}
					<li class:passed={dates.hasPassed(item.date)}>
						<button
							class="button item"
							disabled={loading}
							onclick={() => {
								pages.add({
									...item,
									type: 'setlist'
								});
							}}
						>
							<span class="title" class:italic={!item.title}>{item.title || 'No name'}</span>
							<span class="date">{dates.readable(item.date)}</span>
							<span class="songs">{item.songs}</span>
						</button>
					</li>
				{/each}
			</ol>
		{:else}
			<div class="loader">
				<LoaderCircle />
			</div>
		{/if}
	</div>
</section>

<style>
	section {
		width: 100%;
		max-width: 60rem;
	}

	h1 {
		text-align: center;
	}

	.selector {
		display: flex;
		flex-direction: column;
		color: hsl(var(--card-foreground));
		background-color: hsl(var(--card));
		border-radius: calc(var(--radius) + 4px);
		border: 1px solid hsl(var(--border));
		padding: 1.5rem 1.75rem;
		gap: 1.5rem;
	}

	.header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	h3 {
		margin-right: auto;
	}

	.loader {
		height: 10.5rem;
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
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		gap: 1em;
		padding: 0.5rem;
		border: 0;
		border-bottom: 1px solid hsl(var(--border));
		border-radius: 0;

		&:not(:disabled):hover {
			background-color: hsl(var(--muted) / 0.5);

			.title {
				color: hsl(var(--primary));
			}
		}

		&:disabled {
			opacity: 0.75;
		}
	}

	li:last-child .item {
		border-bottom: 0;
	}

	.passed {
		color: hsl(var(--muted-foreground));
	}

	.title {
		flex-grow: 1;
		font-weight: var(--bold-weight);
	}

	.italic {
		font-style: italic;
	}

	.date {
		color: hsl(var(--muted-foreground));
	}

	.songs {
		font-family: var(--mono-font);
		color: hsl(var(--muted-foreground));
	}
</style>
