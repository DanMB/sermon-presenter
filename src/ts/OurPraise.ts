import IOurPraiseEvent from '@src/types/IOurPraiseEvent';
import IOurPraiseSong from '@src/types/IOurPraiseSong';
import ISetList from '@src/types/ISetList';
import ISongData from '@src/types/ISongData';
import { FirebaseApp, initializeApp, FirebaseOptions } from 'firebase/app';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	orderBy,
	query,
	DocumentSnapshot,
	where,
	limit,
} from 'firebase/firestore';
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

	private static _instance: OurPraise | null = null;
	public static get(): OurPraise | null {
		return this._instance;
	}
	public static init(config: FirebaseOptions): OurPraise {
		this._instance = new OurPraise(config);
		return this._instance;
	}

	private _app: FirebaseApp;
	public get firebase(): FirebaseApp {
		return this._app;
	}

	constructor(config: FirebaseOptions) {
		this._app = initializeApp(config);
	}

	private parseSong = (id: string, data: any): ISongData => {
		return {
			id,
			title: data.title,
			authors: data.authors,
			slides: (data.body as string)
				.replace(/\n\s+\n/g, '\n\n')
				.split('\n\n')
				.map(part => part.replace(/\/\/.*(\n|$)/g, ''))
				.filter(Boolean),
		};
	};

	public song = async (id: string, force: boolean = false): Promise<ISongData | null> => {
		if (!force) {
			const cached = Cache.get<ISongData>(`OurPraise.song.${id}`);
			if (cached) return cached;
		}

		const result = await getDoc(doc(getFirestore(), `songs/${id}`))
			.then(value => {
				if (!value.exists()) return null;
				return this.parseSong(value.id, value.data());
			})
			.catch(e => {
				console.warn(`Error getting song - ${id}`, e);
				return null;
			});

		Cache.set(`OurPraise.song.${id}`, result);
		return result;
	};

	public event = async (id: string, force: boolean = false): Promise<IOurPraiseSong[]> => {
		if (!force) {
			const cached = Cache.get<IOurPraiseSong[]>(`OurPraise.event.${id}`);
			if (cached) return cached;
		}

		const data = await Request.get(OurPraise.endpoint + 'slides?event=' + id).catch(e => {
			console.warn(`Error getting events`, e);
			return null;
		});

		if (!data) {
			throw new Error('Got null from event request');
		}

		try {
			const json: IOurPraiseSong[] = JSON.parse(data);
			Cache.set('OurPraise.events', json);
			return json;
		} catch (e) {
			throw new Error('Failed to parse data from event request');
		}

		// const value = await getDoc(doc(getFirestore(), `events/${id}`)).catch(e => {
		// 	console.warn(`Error getting event - ${id}`, e);
		// 	return null;
		// });
		// if (!value || !value.exists()) {
		// 	Cache.set(`OurPraise.event.${id}`, null);
		// 	return null;
		// }

		// const orgs = await this.organisations();

		// const event = value.data();
		// const org = orgs.find(o => o.id === event.organisation)?.name ?? 'UNKNOWN';

		// const songs: ISongData[] = [];

		// for (const song of event.songs) {
		// 	const songData = await this.song(song.id, force);
		// 	if (songData) songs.push(songData);
		// }

		// const data: ISetList = {
		// 	id: value.id,
		// 	organisation: event.organisation,
		// 	organisationName: org,
		// 	title: event.title,
		// 	date: event.date,
		// 	songs,
		// };

		// Cache.set(`OurPraise.event.${id}`, data);

		// return data;
	};

	public events = async (force: boolean = false): Promise<IOurPraiseEvent[]> => {
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
			Cache.set('OurPraise.events', json);
			return json;
		} catch (e) {
			throw new Error('Failed to parse data from events request');
		}
	};

	public organisations = async (force: boolean = false): Promise<IOrganisation[]> => {
		if (!force) {
			const cached = Cache.get<IOrganisation[]>('OurPraise.organisations');
			if (cached) return cached;
		}

		const data = await getDocs(query(collection(getFirestore(), 'organisations'))).catch(e => {
			console.warn(`Error getting organisations`, e);
			return null;
		});

		const result = data
			? data.docs.map<IOrganisation>(value => {
					const org = value.data();
					return {
						id: value.id,
						name: org.name,
					};
			  })
			: [];

		Cache.set('OurPraise.organisations', result);

		return result;
	};

	public search = async (q: string, force: boolean = false): Promise<ISongData[]> => {
		const norm = q.trim().toUpperCase();

		if (!force) {
			const cached = Cache.get<ISongData[]>('OurPraise.search.' + norm);
			if (cached) return cached;
		}

		// const data = await getDocs(query(collection(getFirestore(), 'organisations')));

		// const result = data.docs.map<IOrganisation>(value => {
		// 	const org = value.data();
		// 	return {
		// 		id: value.id,
		// 		name: org.name,
		// 	};
		// });

		let result: ISongData[] = [];

		if (norm !== '') {
			const data = await getDocs(
				query(collection(getFirestore(), 'songs'), where('title', '>=', norm), where('title', '<=', norm + '\uf8ff'))
			);
			result = data.docs
				.map(value => {
					if (!value.exists()) return null;
					return this.parseSong(value.id, value.data());
				})
				.filter(Boolean) as ISongData[];
		}

		Cache.set('OurPraise.search.' + norm, result);

		return result;
	};
}
