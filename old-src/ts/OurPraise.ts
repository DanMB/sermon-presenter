import IOurPraiseEvent from '@src/types/IOurPraiseEvent';
import IOurPraiseSong from '@src/types/IOurPraiseSong';
import ISearchHit from '@src/types/ISearchHit';
import ISetList from '@src/types/ISetList';
import ISongData from '@src/types/ISongData';
import Cache from './Cache';
import Request from './Request';

export interface IOrganisation {
	id: string;
	name: string;
}

// export interface ISetList<T = ISongData> {
// 	id: string;
// 	title: string;
// 	date: string;
// 	organisation: string;
// 	organisationName: string;
// 	songs: Array<T>;
// }

export default class OurPraise {
	private static endpoint = 'https://europe-west1-ourpraise-fb.cloudfunctions.net/api/';

	public static getSong = async (id: string, force: boolean = false): Promise<IOurPraiseSong> => {
		if (!force) {
			const cached = Cache.get<IOurPraiseSong>(`OurPraise.song.${id}`);
			if (cached) return cached;
		}

		const data = await Request.get(OurPraise.endpoint + 'song?id=' + id).catch(e => {
			console.warn(`Error getting song`, e);
			return null;
		});

		if (!data) {
			throw new Error('Empty response from song requst');
		}

		try {
			const json: IOurPraiseSong = JSON.parse(data);
			Cache.set(`OurPraise.song.${id}`, json, 1800);
			return json;
		} catch (e) {
			throw new Error('Failed to parse data from song request');
		}
	};

	public static getEvent = async (id: string, force: boolean = false): Promise<ISetList> => {
		if (!force) {
			const cached = Cache.get<ISetList>(`OurPraise.event.${id}`);
			if (cached) return cached;
		}

		const data = await Request.get(OurPraise.endpoint + 'event?id=' + id).catch(e => {
			if (e) console.warn(e);
			return null;
		});

		if (!data) {
			throw new Error('Empty response from event request');
		}

		try {
			const json: ISetList = JSON.parse(data);
			Cache.set(`OurPraise.event.${id}`, json, 1800);
			return json;
		} catch (e) {
			throw new Error('Failed to parse data from event request');
		}
	};

	public static getAllEvents = async (force: boolean = false): Promise<IOurPraiseEvent[]> => {
		if (!force) {
			const cached = Cache.get<IOurPraiseEvent[]>('OurPraise.events');
			if (cached) return cached;
		}

		const data = await Request.get(OurPraise.endpoint + 'events').catch(e => {
			console.warn(`Error getting events`, e);
			return null;
		});

		if (!data) {
			throw new Error('Empty response from events request');
		}

		try {
			const json = JSON.parse(data);
			Cache.set('OurPraise.events', json, 600);
			return json;
		} catch (e) {
			throw new Error('Failed to parse data from events request');
		}
	};

	public static search = async (
		query: string,
		force: boolean = false
	): Promise<{ query: string; hits: ISearchHit[] }> => {
		if (!force) {
			const cached = Cache.get<{ query: string; hits: ISearchHit[] }>(`OurPraise.search.${query}`);
			if (cached) return cached;
		}

		const data = await Request.get(OurPraise.endpoint + 'search?q=' + query).catch(e => {
			console.warn(`Error searching songs`, e);
			return null;
		});

		if (!data) {
			throw new Error('Empty response from search request');
		}

		try {
			const json = JSON.parse(data);
			Cache.set(`OurPraise.search.${query}`, json, 600);
			return json;
		} catch (e) {
			throw new Error('Failed to parse data from search request');
		}
	};
}
