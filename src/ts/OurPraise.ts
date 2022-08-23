import IOurPraiseEvent from '@src/types/IOurPraiseEvent';
import IOurPraiseSong from '@src/types/IOurPraiseSong';
import { FirebaseApp, initializeApp, FirebaseOptions } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import Cache from './Cache';

export interface IOrganisation {
	id: string;
	name: string;
}

export interface IEvent<T = ISong> {
	id: string;
	title: string;
	date: string;
	organisation: string;
	organisationName: string;
	songs: Array<T>;
}

export interface ISong {
	id: string;
	title: string;
	authors: string;
	body: string;
}

export default class OurPraise {
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

	public song = async (id: string, force: boolean = false): Promise<ISong | null> => {
		if (!force) {
			const cached = Cache.get<ISong>(`OurPraise.song.${id}`);
			if (cached) return cached;
		}

		const result = await getDoc(doc(getFirestore(), `songs/${id}`)).then(value => {
			if (!value.exists()) return null;
			const data = value.data();

			return {
				id: value.id,
				title: data.title,
				authors: data.authors,
				body: data.body,
			};
		});

		Cache.set(`OurPraise.song.${id}`, result);
		return result;
	};

	public event = async (id: string, force: boolean = false) => {
		if (!force) {
			const cached = Cache.get<IEvent[]>(`OurPraise.event.${id}`);
			if (cached) return cached;
		}

		const value = await getDoc(doc(getFirestore(), `events/${id}`));
		if (!value.exists()) {
			Cache.set(`OurPraise.event.${id}`, null);
			return null;
		}

		const orgs = await this.organisations();

		const event = value.data();
		const org = orgs.find(o => o.id === event.organisation)?.name ?? 'UNKNOWN';

		const songs: ISong[] = [];

		for (const song of event.songs) {
			const songData = await this.song(song.id, force);
			if (songData) songs.push(songData);
		}

		const data: IEvent = {
			id: value.id,
			organisation: event.organisation,
			organisationName: org,
			title: event.title,
			date: event.date,
			songs,
		};

		Cache.set(`OurPraise.event.${id}`, data);

		return data;
	};

	public events = async (force: boolean = false): Promise<IEvent<string>[]> => {
		if (!force) {
			const cached = Cache.get<IEvent<string>[]>('OurPraise.events');
			if (cached) return cached;
		}

		const data = await getDocs(query(collection(getFirestore(), 'events'), orderBy('date', 'desc')));
		const orgs = await this.organisations();

		const result = data.docs.map<IEvent<string>>(value => {
			const ev = value.data();
			const org = orgs.find(o => o.id === ev.organisation)?.name ?? 'UNKNOWN';

			return {
				id: value.id,
				organisation: ev.organisation,
				organisationName: org,
				title: ev.title,
				date: ev.date,
				songs: ev.songs.map((s: any) => s.id),
			};
		});

		Cache.set('OurPraise.events', result);

		return result;
	};

	public organisations = async (force: boolean = false): Promise<IOrganisation[]> => {
		if (!force) {
			const cached = Cache.get<IOrganisation[]>('OurPraise.organisations');
			if (cached) return cached;
		}

		const data = await getDocs(query(collection(getFirestore(), 'organisations')));

		const result = data.docs.map<IOrganisation>(value => {
			const org = value.data();
			return {
				id: value.id,
				name: org.name,
			};
		});

		Cache.set('OurPraise.organisations', result);

		return result;
	};
}
