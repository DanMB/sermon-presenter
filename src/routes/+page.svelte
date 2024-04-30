<script lang="ts">
	import PagesContent from '$lib/sections/PagesContent.svelte';
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

<TopBar />
<PagesContent />
