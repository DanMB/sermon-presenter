<script lang="ts">
	import { Tabs } from '$lib/core/tabs';

	const tabPanel = Tabs.buildPanel('newtab');
</script>

<section {...tabPanel}>
	<h1>NEWTAB</h1>
</section>

<style lang="scss">
	section {
		color: white;
	}
</style>
