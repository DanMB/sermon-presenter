import path from 'path';
import fs, { constants } from 'fs';
import { execFile, exec } from 'child_process';
import tmp from 'tmp';

const soffice = () => {
	let paths: Array<string> = [];

	switch (process.platform) {
		case 'darwin':
			paths = ['/Applications/LibreOffice.app/Contents/MacOS/soffice'];
			break;
		case 'linux':
			paths = ['/usr/bin/libreoffice', '/usr/bin/soffice', '/snap/bin/libreoffice'];
			break;
		case 'win32':
			paths = [
				path.join('C:/Program Files', 'LibreOffice/program/soffice.exe'),
				path.join('C:/Program Files (x86)', 'LIBREO~1/program/soffice.exe'),
				path.join('C:/Program Files (x86)', 'LibreOffice/program/soffice.exe'),
			];
			break;
		default:
			console.log(`Operating system not yet supported: ${process.platform}`);
			return null;
	}

	console.log(paths);

	return paths.find(p => {
		try {
			console.log('Checking access for ' + p + '...');
			fs.accessSync(p, constants.R_OK);
			console.log('passed');
			return true;
		} catch (e) {
			console.log('failed');
			return false;
		}
	});
};

const libre = (document: string, format: string) => {
	// const tmpobj = tmp.fileSync();
	let command = `--headless --convert-to ${format}`;
	command += ` --outdir "C:/Users/danie/Desktop/aav/converted" "${document}"`;
	const args = command.split(' ');
	const exePath = soffice();
	if (!exePath) return;
	// execFile(exePath, args, (err, stdout, stderr) => {
	// 	if (err) console.log('err', err);
	// 	console.log('stdout', stdout);
	// 	if (stderr) console.log('stderr', stderr);
	// });
	exec(
		`soffice.exe ${command}`,
		{
			cwd: 'C:/Program Files/LibreOffice/program',
		},
		(err, stdout, stderr) => {
			if (err) console.log('err', err);
			console.log('stdout', stdout);
			if (stderr) console.log('stderr', stderr);
		}
	);
};

export default libre;
