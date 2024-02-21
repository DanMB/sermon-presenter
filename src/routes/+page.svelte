<script lang="ts">
	import NewTab from '$lib/components/NewTab.svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import Page from '$lib/components/Page.svelte';
	import { invoke } from '@tauri-apps/api/tauri';
	import { Tabs } from '@dan-ui/tabs';

	new Tabs({
		value: 'newtab',
	});

	$effect(() => {
		if (typeof window.__TAURI__ !== 'undefined' && !!window.__TAURI__) invoke('close_splash');
	});
</script>

<main>
	<TopBar />
	<NewTab />
	<Page />
</main>

<style lang="scss">
	main {
		height: 100%;
	}

	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav {
		display: flex;
		align-items: stretch;
		height: 100%;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.3em 1em;

		:global(svg) {
			height: 1em;
			width: 1em;
		}
	}

	.test {
		background-color: red;
	}

	p {
		color: white;
	}
</style>
