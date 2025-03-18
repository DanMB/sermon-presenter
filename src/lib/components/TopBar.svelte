<script lang="ts">
	import { page } from '$app/state';
	import TabItem from './tab-item.svelte';
	import Plus from 'lucide-svelte/icons/plus';
	import X from 'lucide-svelte/icons/x';
	import { pages } from '$lib/pages.svelte';

	let activeId = $state(page.params.tab);
</script>

<header>
	<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
	<nav role="tablist" aria-orientation="horizontal">
		{#each pages.list as pageItem}
			<TabItem value={pageItem.id}>
				<span>{pageItem.title}</span>
				{#if pageItem.id === page.params.tab}
					<button
						onclick={() => {
							pages.remove(pageItem.id);
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

<style>
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
