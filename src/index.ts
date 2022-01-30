import electron, { BrowserWindow, app, App, Menu, ipcMain, Tray, dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import path from 'path';
import Mode from './types/Mode';
import http from 'http';
import fs from 'fs';
import IDisplay from './types/IDisplay';
import AdmZip from 'adm-zip';
import xml2js from 'xml2js';
import libre from './electron/libre';
import { execFile, exec } from 'child_process';
import Slideshow, { SlideshowTypes } from './electron/slideshow/Slideshow';
import Window from './electron/Window';
import ControlWindow from './electron/ControlWindow';
import getPowerpointData from './electron/getPowerpointData';

class SermonApp {
	private mainWindow: Window;
	private presWindow?: BrowserWindow;
	private app: App;

	private mode: Mode = Mode.PROD;
	private server: http.Server;
	private port: number = 3000;

	private displays: Array<IDisplay> = [];
	private tray: electron.Tray;

	constructor(app: App) {
		if (!process.env['MODE']) {
			let envFile: string = './.env.' + (!process.argv.includes('--dev') ? 'prod' : 'dev');

			console.log('.env file location : ' + envFile);

			require('dotenv').config({ path: envFile });
		}

		if (process.env['PORT']) this.port = parseInt(process.env['PORT']);

		if (process.env['MODE'] === 'dev') this.mode = Mode.DEV;
		else {
			this.server = http
				.createServer((req, res) => {
					fs.readFile(path.join(__dirname, req.url), (err, data) => {
						if (err) {
							res.writeHead(404);
							res.end(JSON.stringify(err));
							return;
						}
						res.writeHead(200);
						res.end(data);
					});
				})
				.listen(this.port);
			console.log('Server running on port ' + this.port);
		}

		this.app = app;

		this.app.on('window-all-closed', this.onWindowAllClosed.bind(this));
		this.app.on('ready', this.onReady.bind(this));
		this.app.on('activate', this.onActivated.bind(this));
	}

	private onWindowAllClosed = () => {
		this.app.quit();
	};

	private createControlWindow = async () => {
		this.mainWindow = new ControlWindow(this.app, {
			x: this.displays[0].workarea.x ?? 0,
			y: this.displays[0].workarea.y ?? 0,
		});

		ipcMain.on('window:close', () => {
			this.mainWindow.close();
		});
		ipcMain.on('window:minimize', () => {
			if (this.mainWindow.window.minimizable) this.mainWindow.window.minimize();
		});
		ipcMain.on('window:toggle', () => {
			if (this.mainWindow.window.isMaximized()) {
				this.mainWindow.window.unmaximize();
			} else {
				this.mainWindow.window.maximize();
			}
		});

		ipcMain.on(
			'function:start',
			(
				e,
				data: {
					file: string;
					slide: number;
				}
			) => {
				// var presentation = new Slideshow(data.file, SlideshowTypes.POWERPOINT, data.slide);
			}
		);

		this.mainWindow.window.on('focus', () => {
			ipcMain.emit('window:focus');
		});

		this.mainWindow.window.on('blur', () => {
			ipcMain.emit('window:blur');
		});

		ipcMain.handle(
			'invoke:openfile',
			async (
				e,
				data: {
					type: string;
					name: string;
				}
			) => {
				var response = await dialog.showOpenDialog(this.mainWindow.window, {
					properties: ['openFile'],
					filters: [{ name: data.name, extensions: [data.type] }],
				});

				if (response && !response.canceled) {
					return getPowerpointData(response.filePaths[0]);
				} else {
					return null;
				}
			}
		);

		ipcMain.handle(
			'invoke:getData',
			async (
				e,
				data: {
					file: string;
				}
			) => {
				return getPowerpointData(data.file);
			}
		);
	};

	private onActivated = async () => {
		if (this.displays.length <= 0) return;
		if (this.mainWindow === undefined) this.createControlWindow();
		// if (this.presWindow === undefined) this.createPresentingWindow();
	};

	private onReady = () => {
		let displays = electron.screen.getAllDisplays();
		this.displays = displays.map(dis => {
			return {
				id: dis.id,
				bounds: dis.bounds,
				workarea: dis.workArea,
			};
		});

		// this.tray = new Tray('/path/to/my/icon')
		// const contextMenu = Menu.buildFromTemplate([
		// 	{ label: 'Item1', type: 'radio' },
		// 	{ label: 'Item2', type: 'radio' },
		// 	{ label: 'Item3', type: 'radio', checked: true },
		// 	{ label: 'Item4', type: 'radio' }
		// ])
		// tray.setToolTip('This is my application.')
		// tray.setContextMenu(contextMenu)

		this.onActivated();
	};
}

new SermonApp(app);
