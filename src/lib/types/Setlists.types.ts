export interface SetlistEvent {
	id: string;
	location: string;
	title: string;
	date: string;
	songs: number;
}

export interface SetListGroup {
	location: string;
	events: SetlistEvent[];
}

export interface SongData {
	title: string;
	id: string;
	authors: string;
	slides: string[];
}