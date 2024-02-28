export interface SetlistEvent {
	id: string;
	organisationName: string;
	title: string;
	date: string;
	songs: number;
}

export interface SongData {
	title: string;
	id: string;
	authors: string;
	slides: string[];
}
