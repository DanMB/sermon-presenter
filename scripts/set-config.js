const fs = require('fs');
const path = require('path');

const fileName = path.resolve(__dirname, '../app/neutralino.config.json');
const config = require(fileName);

const isProd = !process.argv.includes('--dev');
const envFile = path.resolve(__dirname, '../.env.' + (isProd ? 'prod' : 'dev'));
require('dotenv').config({ path: envFile });

const url = new URL(process.env['URL']);
url.searchParams.set('isneu', 'true');

config.port = parseInt(process.env['NEU_PORT']);
config.url = url;

fs.writeFileSync(fileName, JSON.stringify(config, null, '\t'));

console.log('updated conig');
console.log('');
console.log('set-config.js successful!');
console.log('');
