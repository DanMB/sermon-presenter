import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI, sequence } from '@melt-ui/pp';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
	compilerOptions: {
		// runes: true,
	},
	kit: {
		adapter: adapter(),
		alias: {
			'@dan-ui/internal': './src/dan-ui/internal/*',
			'@dan-ui': './src/dan-ui/components/*',
		},
	},
	files: {
		assets: 'src/static',
	},
};

export default config;
