<script lang="ts">
	import { Tabs } from '@dan-ui/tabs';

	let tabPanel = Tabs.buildPanel('tab-1');
</script>

<section {...tabPanel}>
	<h1>TAB ONE</h1>
</section>

<style lang="scss">
	section {
		color: white;
	}
</style>
