<script lang="ts">
	import SetlistSelector from '$lib/components/SetlistSelector.svelte';
	import { Tabs } from '$lib/core/tabs';

	const tabPanel = Tabs.buildPanel('newtab');
</script>

<section {...tabPanel}>
	<h1>NEWTAB</h1>
	<SetlistSelector />
</section>

<style lang="scss">
	section {
		flex: 1 1 auto;
	}
</style>
