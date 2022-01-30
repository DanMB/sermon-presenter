import { App, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import Window, { WindowOptions } from './Window';

interface ControlOptions {
	x?: number;
	y?: number;
}

class ControlWindow extends Window {
	private app: App;

	private updateAvailable = false;
	private updateDownloaded = false;

	constructor(app: App, options: ControlOptions) {
		super('control', {
			x: options?.x ?? 0,
			y: options?.y ?? 0,
			subwindow: false,
			background: '#272a30',
		});

		this.window.once('ready-to-show', () => {
			autoUpdater.checkForUpdatesAndNotify();
		});

		ipcMain.once('app:ready', () => {
			if (this.updateAvailable) this.onUpdateAvailable();
			if (this.updateDownloaded) this.onUpdateDownloaded();
		});

		autoUpdater.on('update-available', this.onUpdateAvailable);
		autoUpdater.on('update-downloaded', this.onUpdateDownloaded);
	}

	private onUpdateAvailable = () => {
		if (this.updateAvailable) return;
		this.updateAvailable = true;
		if (this.window) this.window.webContents.send('update:found');
	};

	private onUpdateDownloaded = () => {
		if (this.updateDownloaded) return;
		this.updateDownloaded = true;
		if (this.window) this.window.webContents.send('update:downloaded');
	};

	public close = () => {
		super.close();
		this.app.quit();
	};
}

export default ControlWindow;
