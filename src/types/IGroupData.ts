import ISlideData from './ISlideData';

export enum GroupTypes {
	POWERPOINT = 'powerpoint',
	KEYNOTE = 'keynote',
	SONGS = 'songs',
	VIDEO = 'video',
}

export default interface IGroupData {
	type: GroupTypes;
	name: string;
	id: string;
	activeSlide: number;
	slides: Array<ISlideData>;
	file: string;
	thumbnail?: string;
}
