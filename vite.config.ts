// import { resolve } from 'path';
// import { readFileSync } from 'fs';
// import { VitePWA } from 'vite-plugin-pwa';
import { sveltekit } from '@sveltejs/kit/vite';
import { createLogger, defineConfig } from 'vite';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

// const fileName = resolve(__dirname, './tauri/tauri.conf.json');
// const config = JSON.parse(readFileSync(fileName));

const logger = createLogger();
const loggerWarn = logger.warn;

logger.warn = (msg, options) => {
	if (
		msg.includes('vite:css') &&
		msg.includes('lightningcss') &&
		msg.includes("'global' is not recognized as a valid pseudo-class")
	) {
		return;
	}
	loggerWarn(msg, options);
};

export default defineConfig({
	customLogger: logger,
	build: {
		sourcemap: true,
		target: browserslistToEsbuild(),
		cssMinify: false,
	},
	plugins: [sveltekit()],
	server: {
		port: parseInt(process.env['VITE_PORT'] || '3000'),
	},
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			targets: browserslistToTargets(browserslist()),
		},
	},
});
