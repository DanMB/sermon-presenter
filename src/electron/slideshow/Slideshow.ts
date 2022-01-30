import { platform } from 'os';
import path from 'path';
import {
	execFile,
	exec,
	spawn,
	spawnSync,
	ChildProcess,
	ChildProcessByStdio,
	ChildProcessWithoutNullStreams,
} from 'child_process';
import internal from 'stream';

export enum SlideshowTypes {
	POWERPOINT = 'powerpoint',
	KEYNOTE = 'keynote',
}

class Slideshow {
	private connectors = {
		'darwin-keynote': 'connector-osx-kn5.sh',
		// 'darwin-keynote5': 'connector-osx-kn5.sh',
		// 'darwin-keynote6': 'connector-osx-kn6.sh',
		'darwin-powerpoint': 'connector-osx-ppt2011.sh',
		'win32-powerpoint': 'connector-win-ppt2010.bat',
	};

	private script: string;
	private connection: ChildProcessByStdio<internal.Writable, internal.Readable, null>;
	private spawned: ChildProcessWithoutNullStreams;
	private process: ChildProcess;

	private file: string;
	private type: SlideshowTypes;

	private isConnected: boolean = false;

	constructor(file: string, type: SlideshowTypes = SlideshowTypes.POWERPOINT, slide?: number) {
		this.file = file;
		this.type = type;

		var plat = platform();
		if (plat === 'darwin') {
			if (this.type === SlideshowTypes.KEYNOTE) {
				this.script = 'connector-osx-kn5.sh';
			} else {
				this.script = 'connector-osx-ppt2011.sh';
			}
		} else if (plat === 'win32' && this.type === SlideshowTypes.POWERPOINT) {
			this.script = 'ppt-win.js';
		} else {
			throw new Error('Unsupported platform');
		}

		// var filename = path.join(__dirname, this.script);

		this.spawned = spawn('cscript.exe', [path.resolve(__dirname, this.script)]);
		this.spawned.stdin.setDefaultEncoding('utf8');
		this.spawned.stdout.setEncoding('utf8');

		this.spawned.on('close', (code, signal) => {
			console.log('closed : ', code);
			console.log(signal);
		});

		this.spawned.stdout.on('data', data => {
			let got = data.toString();
			console.log('got1', got);
		});

		console.log(`> SETUP "${file.replaceAll(' ', '%20')}" ${slide ?? 1}`);

		this.spawned.stdin.write(`> SETUP "${file.replaceAll(' ', '%20')}" ${slide ?? 1}` + '\r\n');
	}

	public goto = (slide: number) => {
		if (!this.isConnected) return;
	};

	public close = () => {
		console.log('CLOSE PPT', this.file);
		if (this.process) {
			this.process.removeAllListeners();
			this.process.kill();
		}
		this.process = null;
		this.isConnected = false;
	};

	public focus = () => {
		if (!this.isConnected) return;
	};
}

export default Slideshow;
