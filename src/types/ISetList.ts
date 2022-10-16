import IOurPraiseSong from './IOurPraiseSong';

export default interface ISetList {
	id: string;
	title: string;
	songs: Array<IOurPraiseSong>;
}
