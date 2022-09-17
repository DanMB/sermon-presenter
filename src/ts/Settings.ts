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

export interface ISettingKey {
	key: string;
	type: string;
}

export type SettingsKeys = {
	[Property in keyof ISettingsState]: ISettingKey;
};

export class SettingsStore extends Store<ISettingsState> {
	private _keys: SettingsKeys;
	public get keys() {
		return this._keys;
	}

	constructor() {
		super(DefaultSettings, {
			id: 'settings',
		});

		function reduceKeysToObj(obj: SettingsKeys, name: string) {
			// @ts-ignore
			return { ...obj, [name]: { key: name, type: typeof DefaultSettings[name] } };
		}

		this._keys = Object.keys(DefaultSettings).reduce(reduceKeysToObj, {} as SettingsKeys);
	}
}

const Settings = new SettingsStore();

export default Settings;
