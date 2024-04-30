export default class dates {
	public static now: Date = new Date();

	public static hasPassed(datetime: Date | string | number, includeTime: boolean = false): boolean {
		const date = new Date(datetime);
		if (includeTime) {
			return this.now.getTime() > date.getTime();
		}

		const normalizedDate = new Date(date);
		normalizedDate.setHours(0, 0, 0, 0);

		const normalizedNow = new Date();
		normalizedNow.setHours(0, 0, 0, 0);

		return normalizedNow.getTime() > normalizedDate.getTime();
	}

	public static readable(datetime: Date | string | number): string {
		const date = new Date(datetime);
		let string = date.toLocaleString('da-DK', {
			month: 'short',
			day: '2-digit',
			year: 'numeric',
		});

		const reg = /[a-z]+/i.exec(string);
		if (reg) {
			string = string.replace(reg[0], this.capitalize(reg[0]));
		}

		return string.replaceAll(/\. /g, ' ');
	}

	private static capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}
