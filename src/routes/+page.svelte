<script lang="ts">
	import TabsContent from '$lib/sections/TabsContent.svelte';
	import TopBar from '$lib/sections/TopBar.svelte';
	import { invoke } from '@tauri-apps/api/tauri';
	import { Tabs } from '$lib/core/tabs';

	new Tabs({
		value: 'newtab',
	});

	$effect(() => {
		if (typeof window.__TAURI__ !== 'undefined' && !!window.__TAURI__) invoke('close_splash');
	});
</script>

<main>
	<TopBar />
	<TabsContent />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		height: 100vh;
		width: 100%;
		gap: var(--gap);
		padding: var(--gap);
	}
</style>
