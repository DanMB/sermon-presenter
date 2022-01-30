const esbuild = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');
const fs = require('fs-extra');
const isProd = !process.argv.includes('--dev');

console.log(`Building in ${isProd ? 'production' : 'development'} environment...`);

const options = {
	logLevel: 'info',
	bundle: true,
	// minify: isProd,
	sourcemap: true,
	external: ['esbuild', 'electron', 'electron-updater', ''],
	format: 'cjs',
	platform: 'node',
	target: 'node10.4',
};

esbuild
	.build({
		...options,
		loader: {
			'.png': 'file',
			'.svg': 'text',
		},
		plugins: [svgrPlugin()],
		entryPoints: ['src/index.ts'],
		outfile: 'build/index.js',
	})
	.catch(() => process.exit(1));

esbuild
	.build({
		...options,
		loader: {
			'.png': 'file',
			'.svg': 'text',
		},
		plugins: [svgrPlugin()],
		entryPoints: ['src/preload.ts'],
		outfile: 'build/preload.js',
	})
	.catch(() => process.exit(1));

try {
	fs.copySync('./src/client/assets', './build/assets');
	fs.copySync('./src/client/root', './build/root');
	fs.copySync('./src/package.json', './build/package.json');
	fs.copySync('./src/package.json', './build/package.json');
	fs.copySync('./src/electron/slideshow', './build');

	// var connectors = [
	// 	'connector-osx-kn5.scpt',
	// 	'connector-osx-kn5.sh',
	// 	'connector-osx-kn6.scpt',
	// 	'connector-osx-kn6.sh',
	// 	'connector-osx-ppt201X.js',
	// 	'connector-osx-ppt2011.scpt',
	// 	'connector-osx-ppt2011.sh',
	// 	'connector-win-ppt2010.bat',
	// 	'connector-win-ppt2010.js',
	// ];

	// for (let i = 0; i < connectors.length; i++) {
	// 	fs.copySync(`./node_modules/showyslides/${connectors[i]}`, `./build/${connectors[i]}`);
	// }

	console.log('Static files copied.');
} catch (err) {
	console.error(err);
}
