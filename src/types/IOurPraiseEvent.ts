import IOurPraiseSong from './IOurPraiseSong';

export default interface IOurPraiseEvent {
	title: string;
	date: string;
	songs: Array<IOurPraiseSong>;
	songsIndex: Record<string, IOurPraiseSong>;
	id: string;
	comment: string;
	createdAt: string;
	organisation: string;
	organisationName: string;
	owner: string;
}
