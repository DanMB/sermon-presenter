const fs = require('fs');
const path = require('path');

const fileName = path.resolve(__dirname, '../neutralino.config.json');
const config = require(fileName);

const isProd = !process.argv.includes('--dev');
const envFile = path.resolve(__dirname, '../.env.' + (isProd ? 'prod' : 'dev'));
require('dotenv').config({ path: envFile });

const htmlPath = path.resolve(__dirname, '../src/index.html');
let htmlData = fs.readFileSync(htmlPath, 'utf8');
htmlData = htmlData.replaceAll(/(?<=localhost:)\d+(?=\/.+neutralino\.js")/gi, process.env['NEU_PORT']);
fs.writeFileSync(htmlPath, htmlData);
console.log('updated html');

const url = new URL(process.env['URL']);
url.searchParams.set('isneu', 'true');

// if (parseInt(config.port) !== parseInt(process.env['NEU_PORT']) || config.url !== url.toString()) {
// 	config.port = parseInt(process.env['NEU_PORT']);
// 	config.url = url.toString();

// 	fs.writeFileSync(fileName, JSON.stringify(config, null, '\t'));
// }

console.log('updated config');
console.log('');
console.log('set-config.js successful!');
console.log('');
