import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: {
		// runes: true,
	},
	kit: {
		adapter: adapter(),
	},
	files: {
		assets: 'src/static',
	},
};

export default config;
