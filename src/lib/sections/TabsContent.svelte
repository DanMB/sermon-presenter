<script lang="ts">
	import { tabs } from '$lib/Tabs.svelte';
	import NewTab from '$lib/sections/NewTab.svelte';
	import SetList from './SetList.svelte';
</script>

{#each tabs.list as tab}
	<SetList id={tab.id} />
{/each}
<NewTab />
