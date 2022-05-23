import { defineConfig } from 'vite';
import reactSvgPlugin from 'vite-plugin-react-svg';
import tsconfigPaths from 'vite-tsconfig-paths';
import preact from '@preact/preset-vite';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

let envFile = './.env.' + (isProd ? 'prod' : 'dev');
require('dotenv').config({ path: envFile });

// https://vitejs.dev/config/
export default defineConfig({
	root: './src/client',
	plugins: [
		tsconfigPaths({
			root: '../../',
		}),
		preact(),
		reactSvgPlugin({
			defaultExport: 'component',
		}),
	],
	esbuild: {
		minify: isProd,
		sourcemap: !isProd,
		target: 'esnext',
	},
	server: {
		port: process.env['VITE_PORT'] || 3000,
		open: false,
		host: true,
	},
	logLevel: 'info',
	clearScreen: false,
	build: {
		outDir: '../../build',
		emptyOutDir: true,
		target: 'esnext',
		sourcemap: !isProd,
		minify: isProd,
	},
	cssPreprocessOptions: {
		includePaths: [path.resolve(__dirname, 'src/client/style/')],
	},
});
