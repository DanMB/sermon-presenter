<script lang="ts">
	import { pages } from '$lib/Pages.svelte';
	import NewTab from '$lib/sections/NewTab.svelte';
	import SetList from './SetList.svelte';
</script>

{#each pages.list as page}
	<SetList id={page.id} />
{/each}
<NewTab />
