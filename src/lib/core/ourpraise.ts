export type SongData = {
	title: string;
	id: string;
	authors: string;
	slides: string[];
};

export type EventData = {
	id: string;
	title: string;
	songs: Array<SongData>;
};

export type EventListItem = {
	id: string;
	organisationName: string;
	title: string;
	date: string;
	songs: number;
};

export type SearchResult = {
	query: string;
	hits: {
		authors: string;
		key: string;
		id: number;
		title: string;
	}[];
};

export default class OurPraise {
	private static endpoint = 'https://europe-west1-ourpraise-fb.cloudfunctions.net/api';

	public static getSong = async (id: string): Promise<SongData | undefined> => {
		return await fetch(`${OurPraise.endpoint}/song?id=${id}`)
			.then(async (res) => await res.json())
			.catch((e) => {
				console.warn(`Error getting song`, e);
				return;
			});
	};

	public static getEvent = async (id: string): Promise<EventData | undefined> => {
		return await fetch(`${OurPraise.endpoint}/event?id=${id}`)
			.then(async (res) => await res.json())
			.catch((e) => {
				console.warn(`Error getting event`, e);
				return;
			});
	};

	public static getEvents = async ({
		location,
		limit = 5
	}: {
		location?: string;
		limit?: number;
	}): Promise<EventListItem[] | undefined> => {
		const params = new URLSearchParams({
			limit: limit.toString()
		});
		if (location) params.set('location', location);

		return await fetch(`${OurPraise.endpoint}/events?${params}`)
			.then(async (res) => await res.json())
			.catch((e) => {
				console.warn(`Error getting events`, e);
				return;
			});
	};

	public static search = async (query: string): Promise<SearchResult | undefined> => {
		return await fetch(`${OurPraise.endpoint}/search?q=${query}`)
			.then(async (res) => await res.json())
			.catch((e) => {
				console.warn(`Error searching`, e);
				return;
			});
	};
}
