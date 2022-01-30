import { contextBridge, ipcRenderer } from 'electron';

function init() {
	contextBridge.exposeInMainWorld('electron', {
		send: (name: string, data: any) => ipcRenderer.send(name, data),
		sendSync: (name: string, data: any) => ipcRenderer.sendSync(name, data),
		on: (name: string, func: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => ipcRenderer.on(name, func),
		off: (name: string, func: (event: Electron.IpcRendererEvent, ...args: any[]) => void) =>
			ipcRenderer.off(name, func),
		invoke: (name: string, data: any) => ipcRenderer.invoke(name, data),
	});

	contextBridge.exposeInMainWorld('isElectron', true);

	console.log('Preload finished');
}

init();
