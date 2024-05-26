<script lang="ts">
	import { onMount } from 'svelte';
	import { client } from '$lib/Client.svelte';
	import '../app.scss';

	let { children } = $props();

	onMount(() => {
		client.loadVersions();
	});
</script>

{@render children()}
