<script lang="ts">
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	console.error('page', get(page).error);
</script>

{#if $page.status === 404}
	<p>We’re sorry, it looks like the page you’re looking for isn’t in our system.</p>
{:else if $page.error?.message}
	<p>{$page.error.message}</p>
{/if}
