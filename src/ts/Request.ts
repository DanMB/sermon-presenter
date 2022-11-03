export enum RequestMethods {
	POST = 'POST',
	GET = 'GET',
}

export default class Request {
	public static async get(url: string) {
		return await this.request(RequestMethods.GET, url);
	}

	public static async post(url: string) {
		return await this.request(RequestMethods.POST, url);
	}

	private static async request(method: RequestMethods, url: string) {
		return new Promise<string>(async (resolve, reject) => {
			let xhr = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if (xhr.readyState == 4) {
					if (xhr.status === 200) {
						resolve(xhr.responseText);
					} else {
						reject(xhr.responseText);
					}
				}
			};
			xhr.open(method, url, true);
			xhr.onerror = e => {
				reject(e);
			};
			xhr.send();
		});
	}
}
