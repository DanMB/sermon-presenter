export type UriString = string;

export const CustomProtocol = 'ourpres';

export const UriProtocol = new RegExp(`^${CustomProtocol}:\/\/`);
export const UriFakeProtocol = /^https:\/\//;
export const UriTrailingSlash = /\/(?=$|\?)/;

export default class CustomURI {
	protected _url: URL | undefined;
	protected _urlString: string;

	constructor(initializer: string | string[]) {
		let uriString = '';
		if (Array.isArray(initializer)) {
			uriString = CustomProtocol + '://' + initializer.join('/');
		} else {
			uriString = initializer;
		}
		uriString = uriString.replace(UriTrailingSlash, '');

		if (!UriProtocol.test(uriString)) {
			// throw new Error(`Invalid URI string: should start with "${CustomProtocol}://"`);
			console.error(`Invalid URI string: should start with "${CustomProtocol}://"`);
		}

		this._urlString = uriString.replace(UriProtocol, 'https://');
		this._url = new URL(this._urlString);
	}

	public set hash(hash: string) {
		if (!this._url) return;
		this._url.hash = hash;
	}

	public get hash(): string {
		if (!this._url || this._url.hash) return '';
		return this._url.hash;
	}

	public set parts(parts: string[]) {
		if (!this._url) return;
		const filtered = parts.filter(part => part);
		const host = filtered.shift();

		if (host) this._url.hostname = host;
		this._url.pathname = filtered.join('/');
	}

	public get parts(): string[] {
		if (!this._url) return [];
		return this.path.split('/');
	}

	public set path(path: string) {
		if (!this._url) return;
		this.parts = path.split('/');
	}

	public get path(): string {
		if (!this._url) return '';
		return (this._url.host + this._url.pathname).replace(UriTrailingSlash, '');
	}

	public get params(): URLSearchParams {
		if (!this._url) return new URLSearchParams();
		return this._url.searchParams;
	}

	public limit(limit: number): CustomURI | undefined {
		if (!this._url) return;
		return new CustomURI(this.parts.slice(0, limit + 1));
	}

	public readonly protocol: string = `${CustomProtocol}:`;

	public toString(): UriString {
		if (!this._url) return '';
		return this._url.toString().replace(UriFakeProtocol, `${CustomProtocol}://`).replace(UriTrailingSlash, '');
	}
}
