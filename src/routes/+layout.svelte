<script lang="ts">
	import { onMount } from 'svelte';
	import { client } from '$lib/core/Client.svelte';

	onMount(() => {
		client.loadVersions();
	});
</script>

<slot />
