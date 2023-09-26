import Storage from '../Storage';

export enum Languages {
	default = 'en',
	en = 'en',
	da = 'da',
}

export interface ITranslation {
	[Languages.default]: string;
	[key: string]: string;
}

export default class Translation {
	public static getLanguage(): string {
		const urlParams = new URLSearchParams(window.location.search);
		const linkedLang = urlParams.get('lang');
		const storedLang = Storage.get<string>('lang');

		if (linkedLang) {
			if (linkedLang !== storedLang) {
				Storage.set('lang', linkedLang);
			}
			return linkedLang;
		}
		if (storedLang) {
			return storedLang;
		} else {
			const gottenLang = window.navigator.language ?? Languages.default;
			Storage.set('lang', gottenLang);
			return gottenLang;
		}
	}

	public static translate(translation: ITranslation | string, language?: string): string {
		if (typeof translation === 'string') return translation;

		if (!language) language = Translation.getLanguage();

		if (translation[language]) return translation[language];

		return translation[Languages.default] ?? '';
	}
}
