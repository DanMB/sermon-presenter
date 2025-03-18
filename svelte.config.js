import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI, sequence } from '@melt-ui/pp';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
	kit: {
		adapter: adapter({
			fallback: 'index.html',
		}),
	},
	alias: {
		'@core': './src/lib/core',
	},
	prerender: {
		handleHttpError: ({ message, status }) => {
			if (status === 403) {
				return;
			}
			throw new Error(message);
		},
	},
	files: {
		assets: 'src/static',
	},
};

export default config;
