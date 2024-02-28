import type { SetlistEvent, SongData } from '$lib/types/Setlists.types';

class OurPraiseInstance {
	private static endpoint = 'https://europe-west1-ourpraise-fb.cloudfunctions.net/api';

	public setlists = $state<SetlistEvent[]>([]);

	constructor() {}

	public getSong = async (id: string): Promise<SongData | null> => {
		return await fetch(OurPraiseInstance.endpoint + '/song?id=' + id)
			.then(async res => await res.json())
			.catch(e => {
				console.warn(`Error getting song`, e);
				return null;
			});
	};

	public getEvent = async (id: string): Promise<SongData[] | null> => {
		return await fetch(OurPraiseInstance.endpoint + '/event?id=' + id)
			.then(async res => await res.json())
			.catch(e => {
				console.warn(`Error getting event`, e);
				return null;
			});
	};

	public getAllEvents = async (): Promise<SetlistEvent[] | null> => {
		return await fetch(OurPraiseInstance.endpoint + '/events')
			.then(async res => await res.json())
			.catch(e => {
				console.warn(`Error getting events`, e);
				return null;
			});
	};

	public search = async (query: string): Promise<unknown[] | null> => {
		return await fetch(OurPraiseInstance.endpoint + '/search?q=' + query)
			.then(async res => await res.json())
			.catch(e => {
				console.warn(`Error searching`, e);
				return null;
			});
	};
}

export const ourPraise = new OurPraiseInstance();
