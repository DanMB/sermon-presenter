<script lang="ts">
	import '../style/global.scss';
	// export let data;
</script>

<slot />

<style lang="scss">
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 100vh;
	}
</style>