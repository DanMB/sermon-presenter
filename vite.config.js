import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import preact from '@preact/preset-vite';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

const isProd = process.env.NODE_ENV === 'production';

let envFile = './.env.' + (isProd ? 'prod' : 'dev');
require('dotenv').config({ path: envFile });

// https://vitejs.dev/config/
export default defineConfig({
	root: './src',
	plugins: [
		tsconfigPaths({
			root: '../../',
		}),
		preact(),
		VitePWA({
			includeAssets: ['icons/appIcon.png', 'robots.txt'],
			manifest: {
				version: process.env.npm_package_version,
				name: 'Sermon Presenter',
				short_name: 'Sermon',
				theme_color: '#ffffff',
				icons: [
					{
						src: 'icons/appIcon.png',
						sizes: '200x200',
						type: 'image/png',
					},
				],
			},
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
		outDir: '../build',
		emptyOutDir: true,
		target: 'esnext',
		sourcemap: !isProd,
		minify: isProd,
	},
	cssPreprocessOptions: {
		includePaths: [path.resolve(__dirname, 'src/style/')],
	},
});
