import Store from '@src/types/Store';

export interface ISettingsState {
	sidebarWidth: number;
	sidebar: string | null;
	padding: { top: number; right: number; bottom: number; left: number };
	font: string;
	scale: number;
	background: string;
}

export const DefaultSettings = {
	sidebarWidth: 200,
	sidebar: null,
	padding: {
		top: 25,
		right: 25,
		bottom: 25,
		left: 25,
	},
	font: `'Fira Sans', sans-serif`,
	scale: 1,
	background: '#000000',
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
