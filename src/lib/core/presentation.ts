export type PresentationConfig = {
	font: string;
	scale: number;
	background: string | ArrayBuffer;
	foreground: string;
	autoScale: boolean;
	position: number;
};

export default class Presentation {
	private _config: PresentationConfig = {
		font: `'Fira Sans', sans-serif`,
		scale: 1,
		background: '#000000',
		foreground: '#ffffff',
		autoScale: true,
		position: 0.5
	};
	public get config() {
		return this._config;
	}

	private _active: string | ArrayBuffer | null = null;
	public get active() {
		return this._active;
	}

	constructor(config?: Partial<PresentationConfig>) {
		if (config) {
			this._config = {
				...this._config,
				...config
			};
		}
	}
}
