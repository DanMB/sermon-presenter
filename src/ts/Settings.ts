import Store from '@src/types/Store';
import PresentWindow from './presenter/PresentWindow';

export interface ISettingsState {
	padding: { top: number; right: number; bottom: number; left: number };
	font: string;
	scale: number;
	background: string;
	foreground: string;
	autoScale: boolean;
}

export const DefaultSettings: ISettingsState = {
	padding: {
		top: 25,
		right: 25,
		bottom: 25,
		left: 25,
	},
	font: `'Fira Sans', sans-serif`,
	scale: 1,
	background: '#000000',
	foreground: '#ffffff',
	autoScale: true,
};

export class SettingsStore extends Store<ISettingsState> {
	constructor() {
		super(DefaultSettings, {
			id: 'settings',
		});
	}
}

const Settings = new SettingsStore();

export default Settings;
