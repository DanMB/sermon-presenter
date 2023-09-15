import { IFileData } from '@src/components/Input/FileInput';
import Store from '@src/types/Store';
import PresentWindow from './presenter/PresentWindow';

export interface ISettingsState {
	font: string;
	scale: number;
	background: IFileData | null;
	foreground: string;
	autoScale: boolean;
	position: number;
}

export const DefaultSettings: ISettingsState = {
	font: `'Fira Sans', sans-serif`,
	scale: 1,
	background: null,
	foreground: '#ffffff',
	autoScale: true,
	position: 0.5,
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
			id: 'settings_0',
			maxAge: Infinity,
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
