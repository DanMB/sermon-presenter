import IWindowFeatures from '@src/types/IWindowFeatures';

export default class WindowFeatures {
	public static settingsToString(settings: IWindowFeatures): string {
		const setTyped = settings as unknown as { [key: string]: number | boolean };
		return (
			Object.keys(settings)
				.map(key => {
					let value: number | boolean | string = setTyped[key];
					if (typeof value == 'boolean') {
						value = value ? 'yes' : 'no';
					}

					let string = `${key}=${setTyped[key]}`;

					if (key === 'top') {
						string += `,screenY=${setTyped[key]}`;
					} else if (key === 'left') {
						string += `,screenX=${setTyped[key]}`;
					} else if (key === 'width') {
						string += `,innerWidth=${setTyped[key]}`;
					} else if (key === 'height') {
						string += `,innerHeight=${setTyped[key]}`;
					}

					return string;
				})
				.join(',') + ',popup=1'
		);
	}
}
