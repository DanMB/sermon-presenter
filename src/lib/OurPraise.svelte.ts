import type { SetListGroup, SetlistEvent, SongData } from '$lib/types/Setlists.types';

class OurPraiseClass {
	private static endpoint = 'https://europe-west1-ourpraise-fb.cloudfunctions.net/api';

	public setlists = $state<SetListGroup[]>([]);

	constructor() {}

	// public getSong = async (id: string): Promise<SongData | null> => {
	// 	return await fetch(OurPraiseClass.endpoint + '/song?id=' + id)
	// 		.then(async res => await res.json())
	// 		.catch(e => {
	// 			console.warn(`Error getting song`, e);
	// 			return null;
	// 		});
	// };

	public getEvent = async (id: string): Promise<SongData[] | null> => {
		return await fetch(OurPraiseClass.endpoint + '/event?id=' + id)
			.then(async res => await res.json())
			.catch(e => {
				console.warn(`Error getting event`, e);
				return null;
			});
	};

	public getEvents = async ({
		location,
		limit = 8,
	}: {
		location?: string;
		limit?: number;
	}): Promise<SetlistEvent[] | null> => {
		const params = new URLSearchParams();
		if (location) params.set('location', location);
		params.set('limit', limit.toString());

		return await fetch(`${OurPraiseClass.endpoint}/events?${params}`)
			.then(async res => await res.json())
			.catch(e => {
				console.warn(`Error getting events`, e);
				return null;
			});
	};

	// public search = async (query: string): Promise<unknown[] | null> => {
	// 	return await fetch(OurPraiseClass.endpoint + '/search?q=' + query)
	// 		.then(async res => await res.json())
	// 		.catch(e => {
	// 			console.warn(`Error searching`, e);
	// 			return null;
	// 		});
	// };
}

export const ourPraise = new OurPraiseClass();