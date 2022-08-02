const fs = require('fs');
const path = require('path');

const isProd = !process.argv.includes('--dev');
const envFile = path.resolve(__dirname, '../.env.' + (isProd ? 'prod' : 'dev'));
require('dotenv').config({ path: envFile });

const url = new URL(process.env['URL']);
const urlString = url.toString();

const htmlPath = path.resolve(__dirname, '../src/public/client.html');
let htmlData = fs.readFileSync(htmlPath, 'utf8');
htmlData = htmlData.replaceAll(/https?:\/\/.*\/(?=\?port)/gi, urlString);
fs.writeFileSync(htmlPath, htmlData);
console.log('updated html');

console.log('');
console.log('set-config.js successful!');
console.log('');
