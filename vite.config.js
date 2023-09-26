import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';
import mkcert from 'vite-plugin-mkcert';

const isProd = process.env.NODE_ENV === 'production';

let envFile = './.env.' + (isProd ? 'prod' : 'dev');
require('dotenv').config({ path: envFile });

const fileName = resolve(__dirname, './tauri/tauri.conf.json');
const config = require(fileName);

// https://vitejs.dev/config/
export default defineConfig({
	envPrefix: ['VITE_', 'APP_'],
	define: {
		__VERSION__: JSON.stringify(process.env.npm_package_version),
	},
	root: './src',
	plugins: [
		mkcert(),
		tsconfigPaths({
			root: '../../',
		}),
		sveltekit(),
		VitePWA({
			includeAssets: ['icons/logo-192x192.png', 'icons/logo-512x512', 'favicon.ico', 'robots.txt'],
			manifest: {
				version: process.env.npm_package_version,
				app: config.package.version,
				name: 'OurPresenter',
				short_name: 'OurPresenter',
				icons: [
					{
						src: '/icons/logo-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/icons/logo-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
				theme_color: '#10141d',
				background_color: '#10141d',
				display: 'standalone',
			},
		}),
	],
	// esbuild: {
	// 	minify: isProd,
	// 	sourcemap: !isProd,
	// 	target: 'esnext',
	// },
	server: {
		port: process.env['VITE_PORT'] || 3000,
		open: false,
		host: true,
		https: true,
	},
	logLevel: 'info',
	clearScreen: false,
	build: {
		outDir: '../build',
		emptyOutDir: true,
		// target: 'esnext',
		// sourcemap: !isProd,
		// minify: isProd,
	},
	cssPreprocessOptions: {
		includePaths: [path.resolve(__dirname, 'src/style/')],
	},
});
