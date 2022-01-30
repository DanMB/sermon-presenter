export default interface ICustomWindow extends Window {
	isElectron: boolean;
	electron: {
		send: (name: string, data: any) => void;
		sendSync: (name: string, data: any) => any;
		on: (name: string, func: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => void;
		off: (name: string, func: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => void;
		invoke: (name: string, data: any) => Promise<any>;
	};
}
