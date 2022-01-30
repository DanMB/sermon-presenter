import { defineConfig } from 'vite';
import reactSvgPlugin from 'vite-plugin-react-svg';
import preact from '@preact/preset-vite';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

let envFile = './.env.' + (isProd ? 'prod' : 'dev');
require('dotenv').config({ path: envFile });

// https://vitejs.dev/config/
export default defineConfig({
	root: './src/client',
	plugins: [
		preact(),
		reactSvgPlugin({
			defaultExport: 'component',
		}),
	],
	esbuild: {
		minify: isProd,
		sourcemap: !isProd,
		target: 'es2020',
	},
	server: {
		port: process.env['PORT'] || 3000,
		open: false,
		host: true,
	},
	logLevel: isProd ? 'info' : 'warn',
	build: {
		outDir: '../../build',
		emptyOutDir: true,
		target: 'es2020',
		sourcemap: !isProd,
		minify: isProd,
	},
	cssPreprocessOptions: {
		includePaths: [path.resolve(__dirname, 'src/client/style/')],
	},
});
