import IOurPraiseEvent from '@src/types/IOurPraiseEvent';
import IOurPraiseSong from '@src/types/IOurPraiseSong';
import ISetList from '@src/types/ISetList';
import ISongData from '@src/types/ISongData';
import { FirebaseApp, initializeApp, FirebaseOptions } from 'firebase/app';
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

	public static getEvent = async (id: string, force: boolean = false): Promise<IOurPraiseSong[]> => {
		if (!force) {
			const cached = Cache.get<IOurPraiseSong[]>(`OurPraise.event.${id}`);
			if (cached) return cached;
		}

		const data = await Request.get(OurPraise.endpoint + 'event?id=' + id).catch(e => {
			console.warn(`Error getting events`, e);
			return null;
		});

		if (!data) {
			throw new Error('Got null from event request');
		}

		try {
			const json: IOurPraiseSong[] = JSON.parse(data);
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
			throw new Error('Got null from events request');
		}

		try {
			const json = JSON.parse(data);
			Cache.set('OurPraise.events', json, 600);
			return json;
		} catch (e) {
			throw new Error('Failed to parse data from events request');
		}
	};
}
