import ISongData from './ISongData';

export default interface ISetList {
	id: string;
	title: string;
	date: string;
	organisation: string;
	organisationName: string;
	songs: Array<ISongData>;
}
