<script lang="ts">
	import TopBar from '$lib/sections/TopBar.svelte';
	import { invoke } from '@tauri-apps/api/tauri';

	let { children } = $props();

	$effect(() => {
		if (typeof window.__TAURI__ !== 'undefined' && !!window.__TAURI__) invoke('close_splash');
	});
</script>

<TopBar />
<main>
	{@render children()}
</main>
