export default class Dates {
	public static now: Date = new Date();

	public static hasPassed(datetime: Date, includeTime: boolean = false): boolean {
		if (includeTime) {
			return this.now.getTime() > datetime.getTime();
		}

		const normalizedDate = new Date(datetime);
		normalizedDate.setHours(0, 0, 0, 0);

		const normalizedNow = new Date();
		normalizedNow.setHours(0, 0, 0, 0);

		return normalizedNow.getTime() > normalizedDate.getTime();
	}

	public static Full(datetime: Date): string {
		let string = datetime.toLocaleString('da-DK', {
			month: 'short',
			day: '2-digit',
			year: 'numeric',
		});

		let re = /[a-z]+/i.exec(string);

		if (re) {
			string = string.replace(re[0], this.capitalize(re[0]));
		}

		return string.replaceAll(/\. /g, ' ');
	}

	private static capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	private static getMonthNum(datetime: Date): number {
		return datetime.getFullYear() * 12 + datetime.getMonth();
	}
}
