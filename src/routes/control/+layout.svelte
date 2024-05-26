<script lang="ts">
	import { page } from '$app/stores';
	import TopBar from '$lib/components/TopBar.svelte';
	import { invoke } from '@tauri-apps/api/tauri';

	let { children } = $props();

	$effect(() => {
		if (typeof window.__TAURI__ !== 'undefined' && !!window.__TAURI__) invoke('close_splash');
	});
</script>

<TopBar />
<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<main role="tabpanel" tabindex="0" id={$page.params.tab}>
	{@render children()}
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
</style>
