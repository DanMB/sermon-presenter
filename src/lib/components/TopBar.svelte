<script lang="ts">
	import { page } from '$app/stores';
	import { pages } from '$lib/Pages.svelte';
	import TabItem from '$lib/atoms/TabItem.svelte';
	import Plus from 'lucide-svelte/icons/plus';
	import X from 'lucide-svelte/icons/x';
	import { onMount } from 'svelte';

	let activeId = $state('');

	onMount(() => {
		const unsub = page.subscribe(newPage => {
			activeId = newPage.params.tab;
		});

		return () => {
			unsub();
		};
	});
</script>

<header>
	<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
	<nav role="tablist" aria-orientation="horizontal">
		{#each pages.list as page}
			<TabItem value={page.id}>
				<span>{page.title}</span>
				{#if page.id === activeId}
					<button
						onclick={() => {
							pages.remove(page.id);
						}}
					>
						<X />
					</button>
				{/if}
			</TabItem>
		{/each}
		<TabItem>
			<Plus />
		</TabItem>
	</nav>
</header>

<style lang="scss">
	header {
		background-color: hsl(var(--topbar));
		color: hsl(var(--topbar-foreground));
		display: flex;
		align-items: stretch;
		height: 100%;
		flex: 0 0 0;
		border-bottom: 1px solid hsl(var(--border));
		padding: 0.5rem 0.5rem;
		gap: 0.25rem;
	}

	nav {
		display: flex;
		align-items: stretch;
		height: 100%;
		gap: 0.25rem;
	}

	button {
		display: flex;
		place-items: center;
		cursor: pointer;
	}
</style>
