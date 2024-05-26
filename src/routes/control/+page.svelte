<script lang="ts">
	import SetlistSelector from '$lib/components/SetlistSelector.svelte';
</script>

<main>
	<section>
		<h1>OurPresenter</h1>
		<SetlistSelector />
	</section>
</main>

<style lang="scss">
	main {
		flex: 1 1 auto;
		padding: 1.5rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		width: 100%;
		max-width: 60rem;
	}

	h1 {
		text-align: center;
	}
</style>
