const fs = require('fs');
const path = require('path');

const fileName = path.resolve(__dirname, '../neutralino.config.json');
const config = require(fileName);

const isProd = !process.argv.includes('--dev');
const envFile = path.resolve(__dirname, '../.env.' + (isProd ? 'prod' : 'dev'));
require('dotenv').config({ path: envFile });

const verDir = path.resolve(__dirname, '../build/ver');
if (!fs.existsSync(verDir)) fs.mkdirSync(verDir);

const url = new URL(process.env['URL']);
url.pathname = url.pathname + 'ver/update.neu';

let manifest = {
	applicationId: config.applicationId,
	version: config.version,
	resourcesURL: url,
	data: {},
};

const manifestPath = path.resolve(__dirname, '../build/ver/manifest.json');

let data = JSON.stringify(manifest, null, '\t');
fs.writeFileSync(manifestPath, data);
console.log('manifest.json was written');

const resourcesPath = path.resolve(__dirname, `../dist/${config.cli.binaryName}/resources.neu`);
const updatePath = path.resolve(__dirname, '../build/ver/update.neu');

fs.copyFileSync(resourcesPath, updatePath);
console.log('resources.neu was copied');
console.log('');
console.log('post-build.js successful!');
