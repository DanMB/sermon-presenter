import ICustomWindow from '../ts/ICustomWindow';

export default class ElectronWindow {
	private win: ICustomWindow & typeof globalThis;
	private isElectron: boolean;

	constructor() {
		this.win = window as ICustomWindow & typeof globalThis;
		this.isElectron = !!this.win.isElectron;
	}

	public send = (name: string, data?: any) => {
		if (this.isElectron) this.win.electron.send(name, data);
	};

	public sendSync = (name: string, data: any) => {
		if (this.isElectron) return this.win.electron.sendSync(name, data);
		else return null;
	};

	public on = (name: string, func: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => {
		if (this.isElectron) this.win.electron.on(name, func);
	};

	public off = (name: string, func: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => {
		if (this.isElectron) this.win.electron.off(name, func);
	};

	public invoke = async (name: string, data: any) => {
		if (this.isElectron) {
			return await this.win.electron.invoke(name, data);
		} else {
			return null;
		}
	};

	public save = (name: string, data: object | string) => {
		if (!data || !name) return;
		let value = data as string;

		if (typeof data === 'object') {
			value = JSON.stringify(data);
		} else if (typeof data !== 'string') {
			value = `${data}`;
		}

		this.win.localStorage.setItem(name, value);
	};

	public get = (name: string, isObject: boolean = true): object | string | null => {
		let storage = this.win.localStorage.getItem(name);
		if (!storage) return null;
		if (isObject) return JSON.parse(storage);
		return storage;
	};

	public delete = (name: string) => {
		this.win.localStorage.removeItem(name);
	};
}
