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
	private spawned: ChildProcessWithoutNullStreams;
	private process: ChildProcess;

	private type: SlideshowTypes;

	private isConnected: boolean = false;

	private presentations: Array<{ file: string; isPresenting: boolean; images: Array<string> }> = [];

	constructor(type: SlideshowTypes = SlideshowTypes.POWERPOINT) {
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

		this.run();
	}

	public run = async () => {
		if (this.isConnected) return;

		// this.spawned = spawn('cscript.exe', [path.resolve(__dirname, this.script)]);
		// this.spawned.stdin.setDefaultEncoding('utf8');
		// this.spawned.stdout.setEncoding('utf8');

		// this.spawned.on('close', (code, signal) => {
		// 	console.log('closed : ', code);
		// 	console.log(signal);
		// });

		// this.spawned.stdout.on('data', data => {
		// 	let got = data.toString();
		// 	console.log('got1', got);
		// });

		this.isConnected = true;
		return;
	};

	public open = async (file: string) => {
		if (!this.isConnected) await this.run();
		if (this.presentations.some(p => p.file === file)) return;

		// console.log(`> SETUP "${file.replaceAll(' ', '%20')}" ${slide ?? 1}`);
		// this.spawned.stdin.write(`> SETUP "${file.replaceAll(' ', '%20')}" ${slide ?? 1}` + '\r\n');

		this.presentations.push({
			file,
			isPresenting: false,
			images: [],
		});

		console.log(`Opened file ${file}`);
		return;
	};

	public getImages = async (file: string) => {
		if (!this.isConnected) await this.run();

		var index = this.presentations.findIndex(p => p.file === file);
		if (index <= 0) await this.open(file);

		index = this.presentations.findIndex(p => p.file === file);
		if (index <= 0) return [];

		this.presentations[index].images = [
			'https://blog.mastykarz.nl/assets/images/waldek.jpg',
			'https://blog.mastykarz.nl/assets/images/waldek.jpg',
			'https://blog.mastykarz.nl/assets/images/waldek.jpg',
			'https://blog.mastykarz.nl/assets/images/waldek.jpg',
		];

		console.log(`Got images for ${file}`);
		return this.presentations[index].images;
	};

	public present = async (file: string) => {
		if (!this.isConnected) return;

		var index = this.presentations.findIndex(p => p.file === file);
		if (index <= 0) await this.open(file);

		index = this.presentations.findIndex(p => p.file === file);
		if (index <= 0) return;

		if (this.presentations[index].isPresenting) return;

		this.presentations[index].isPresenting = true;

		console.log(`Present ${file}`);
		return;
	};

	public goto = async (file: string, slide: number = 0) => {
		if (!this.isConnected) return;

		var index = this.presentations.findIndex(p => p.file === file);
		if (index <= 0) await this.open(file);

		index = this.presentations.findIndex(p => p.file === file);
		if (index <= 0) return;

		if (!this.presentations[index].isPresenting) await this.present(file);

		console.log(`Goto slide ${slide} (${file})`);
		return;
	};

	public close = async (file: string, remove: boolean = true) => {
		if (!this.isConnected) return;

		var index = this.presentations.findIndex(p => p.file === file);
		if (index <= 0) return;

		if (remove) this.presentations.splice(index, 1);

		console.log(`Closed ${file}`);
		return this.presentations[index].images;
	};

	public unmount = async () => {
		for (let i = 0; i < this.presentations.length; i++) {
			await this.close(this.presentations[i].file, false);
		}

		if (this.process) {
			this.process.removeAllListeners();
			this.process.kill();
		}
		this.process = null;
		this.isConnected = false;

		return;
	};
}

export default Slideshow;
