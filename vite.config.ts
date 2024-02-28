import { defineConfig } from 'vite';
// import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { VitePWA } from 'vite-plugin-pwa';
// import mkcert from 'vite-plugin-mkcert';
import { sveltekit } from '@sveltejs/kit/vite';

const isProd = process.env.NODE_ENV === 'production';

const fileName = resolve(__dirname, './tauri/tauri.conf.json');
// @ts-ignore
const config = JSON.parse(readFileSync(fileName));

// https://vitejs.dev/config/
export default defineConfig({
	envPrefix: ['VITE_', 'APP_'],
	define: {
		__VERSION__: JSON.stringify(process.env.npm_package_version),
	},
	plugins: [
		sveltekit(),
		// mkcert(),
		// tsconfigPaths({
		// 	root: '../../',
		// }),
		VitePWA({
			includeAssets: ['icons/logo-192x192.png', 'icons/logo-512x512', 'favicon.ico', 'robots.txt'],
			manifest: {
				// @ts-ignore
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
	server: {
		port: parseInt(process.env['VITE_PORT'] || '3000'),
		open: false,
		host: true,
	},
	logLevel: 'info',
	clearScreen: false,
	build: {
		outDir: '../build',
		emptyOutDir: true,
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import 'src/app.scss';`,
			},
			includePaths: [resolve(__dirname, 'src/style/')],
		},
	},
});
