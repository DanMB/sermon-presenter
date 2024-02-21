<script lang="ts">
	import { onMount } from 'svelte';
	import { client } from '$lib/core/Client.svelte';

	onMount(() => {
		client.loadVersions();
	});
</script>

<slot />

<style lang="scss" global>
	html,
	body {
		margin: 0;
		padding: 0;
	}

	body {
		min-height: 100vh;
		width: 100%;
		overflow: hidden;
	}

	* {
		box-sizing: border-box;
	}
</style>
