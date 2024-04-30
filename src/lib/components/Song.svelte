<script lang="ts">
	import text from '$lib/tools/text';
	import type { SongData } from '$lib/types/Setlists.types';
	import ArrowBigUp from 'lucide-svelte/icons/arrow-big-up';

	const { data }: { data: SongData } = $props();
</script>

<section>
	<h3>{data.title}</h3>
	<ol>
		{#each data.slides as slide, index}
			<li>
				<button>
					{#if index <= 20}
						<kbd>
							{#if index > 10}<ArrowBigUp />{/if}
							<span>{index % 10}</span>
						</kbd>
					{/if}
					<div class="preview">
						<div class="content">{text.cleanMultiline(slide)}</div>
					</div>
				</button>
			</li>
		{/each}
	</ol>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		position: relative;
		width: 100%;
	}

	/* h3 {
		position: sticky;
		top: 0;
		background-color: hsl(var(--muted) / 0.4);
	} */

	ol {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-auto-rows: max-content;
	}

	li {
		display: flex;
		aspect-ratio: 16 / 9;
	}

	button {
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: relative;
		color: hsl(var(--card-foreground));
		background-color: hsl(var(--card));
		border-radius: calc(var(--radius) + 4px);
		border-color: hsl(var(--border));
	}

	kbd {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
		font-family: var(--mono-font);
		display: none;
	}

	.preview {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 2;
		font-size: var(--size-small);
		--line-height: 1.25em;
		--vpad: 15px;
		padding: var(--vpad) 12px;
		-webkit-mask-image: linear-gradient(
			to top,
			transparent var(--vpad),
			black calc(var(--line-height) + var(--vpad)) 100%
		);
		-webkit-mask-size: 100% 100%;
		mask-image: linear-gradient(to top, transparent var(--vpad), black calc(var(--line-height) + var(--vpad)) 100%);
		mask-size: 100% 100%;
	}

	.content {
		line-height: 1.25em;
		text-align: center;
		white-space: pre;
		overflow: hidden;
		text-overflow: ellipsis;
		max-height: 100%;
		width: 100%;

		::selection {
			background-color: none;
		}
	}
</style>
