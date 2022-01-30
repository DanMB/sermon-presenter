import { BrowserWindow, ipcMain, Menu } from 'electron';
import path from 'path';
import Mode from '../types/Mode';

export interface WindowOptions {
	x?: number;
	y?: number;
	subwindow?: boolean;
	background?: string;
}

class Window {
	public window: BrowserWindow;
	private mode: Mode = Mode.PROD;

	constructor(name: string, options?: WindowOptions) {
		if (process.env['MODE'] === 'dev') this.mode = Mode.DEV;

		Menu.setApplicationMenu(
			Menu.buildFromTemplate([
				{
					label: '&debug',
					submenu: [
						{ role: 'toggleDevTools' },
						{ role: 'forceReload' },
						// { type: "separator" },
						// {
						// 	label: "Reload Overlay",
						// 	click: () => {
						// 		if(map) map.webContents.reloadIgnoringCache();
						// 	}
						// }
					],
				},
			])
		);

		var subwindow = options?.subwindow ?? true;

		this.window = new BrowserWindow({
			x: options?.x ?? 0,
			y: options?.y ?? 0,
			width: 700,
			height: 500,
			minWidth: 500,
			minHeight: 300,
			useContentSize: true,
			acceptFirstMouse: true,
			autoHideMenuBar: true,
			backgroundColor: '#272a30',
			show: false,
			webPreferences: {
				preload: path.join(__dirname, 'preload.js'),
			},
			titleBarStyle: subwindow ? 'hidden' : 'hiddenInset',
			maximizable: !subwindow,
			closable: !subwindow,
			skipTaskbar: subwindow,
			frame: false,
			minimizable: !subwindow,
			fullscreen: subwindow,
		});

		this.window.hide();

		this.window.loadURL(
			`http://localhost:${process.env['PORT']}${this.mode === Mode.PROD ? '/index.html' : ''}?window=${name}`
		);

		this.window.maximize();

		this.window.on('close', this.close);
		this.window.on('closed', this.close);

		ipcMain.once('app:ready', () => {
			this.window.show();
		});
	}

	public close = () => {
		if (this.window) {
			this.window.close();
			this.window = null;
		}
	};
}

export default Window;
