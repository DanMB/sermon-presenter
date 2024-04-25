<script lang="ts">
	import { onMount } from 'svelte';
	import { client } from '$lib/Client.svelte';

	onMount(() => {
		client.loadVersions();
	});
</script>

<slot />

<style lang="scss" global>
	html,
	body {
		margin: 0;
		padding: 0;
	}

	body {
		min-height: 100vh;
		width: 100%;
		background-color: $background;
		color: $text;
		font-family: $font-stack;
		font-size: $font-size;
		font-weight: weight(regular);
		overflow: hidden;

		#wrapper {
			width: 100%;
			height: 100%;
			min-height: 100vh;
			position: relative;

			* {
				box-sizing: border-box;
			}
		}
	}

	.page {
		display: flex;
		flex-direction: column;
		max-height: 100vh;
		@include cleanScrollbar();
		overflow-y: auto;
		padding: $padding;
		border-radius: $radius;
		background-color: $offset;
	}

	.Control {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: flex-start;
		height: 100vh;
		width: 100%;
		gap: $gap;
		padding: $gap;

		.main {
			flex: 1 0 auto;

			display: flex;
			flex-direction: column;
			align-items: stretch;
			justify-content: flex-start;
		}
	}

	.PresentWrapper {
		width: 100%;
		height: 100%;
		min-height: 100vh;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		background: #000 no-repeat center center;
		background-size: cover;
	}

	.Present {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100%;
	}

	[data-type='songs'] {
		--color: #{$songs};
	}
	[data-type='video'] {
		--color: #{$video};
	}
	[data-type='powerpoint'] {
		--color: #{$powerpoint};
	}
	[data-type='keynote'] {
		--color: #{$keynote};
	}

	.spinner {
		animation: rotate 2s linear infinite;
		width: 1.2em;
		height: 1.2em;

		.path {
			stroke: currentColor;
			stroke-linecap: round;
			animation: dash 1.5s ease-in-out infinite;
		}
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
</style>
