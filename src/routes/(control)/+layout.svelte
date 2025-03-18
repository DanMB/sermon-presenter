<script lang="ts">
	import { isTauri, invoke } from '@tauri-apps/api/core';
	import Topbar from '$lib/components/topbar.svelte';

	let { children } = $props();

	$effect(() => {
		if (isTauri()) invoke('close_splash');
	});
</script>

<Topbar />
<main>
	{@render children()}
</main>

<style>
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

		&:focus-visible {
			outline: none;
		}
	}
</style>
