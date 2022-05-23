var fs = require('fs');
const fileName = './app/neutralino.config.json';

const config = require(fileName);

const isProd = !process.argv.includes('--dev');

let envFile = './.env.' + (isProd ? 'prod' : 'dev');
require('dotenv').config({ path: envFile });

config.port = parseInt(process.env['NEU_PORT']);
config.url = process.env['URL'];

fs.writeFile(fileName, JSON.stringify(config), err => {
	if (err) return console.log(err);
	console.log(JSON.stringify(file));
	console.log('writing to ' + fileName);
});
