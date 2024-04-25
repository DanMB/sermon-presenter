<script lang="ts">
	import { onMount } from 'svelte';
	import { client } from '$lib/Client.svelte';
	import '../app.scss';

	onMount(() => {
		client.loadVersions();
	});
</script>

<slot />
