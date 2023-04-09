import Client from '@src/ts/Client';
import { invoke } from '@tauri-apps/api/tauri';

export class ShowyControl {
	private filepath: string;

	constructor(filepath: string) {
		if (!Client.isTau) throw new Error('Attempted to create ShowyControl instance without Tauri connection');
		this.filepath = filepath;

		invoke('load_slideshow', {
			filepath,
		})
			.then(data => {
				console.log(data);
			})
			.catch(err => {
				console.error(err);
			});
	}
}
