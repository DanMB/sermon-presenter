const fs = require('fs');

const fileName = './app/neutralino.config.json';
const config = require(fileName);

const url = new URL(process.env['URL']);
url.pathname = url.pathname + 'ver/update.neu';

let manifest = {
	applicationId: config.applicationId,
	version: config.version,
	resourcesURL: url,
	data: {},
};

let data = JSON.stringify(manifest);
fs.writeFileSync('build/ver/manifest.json', data);
console.log('manifest.json was written');

fs.copyFileSync(`app/dist/${config.cli.binaryName}/resources.neu`, 'build/ver/update.neu');
console.log('resources.neu was copied');
console.log('');
console.log('post-build.js successful!');
