import { UriString } from './CustomURI';
import ISongData from './ISongData';

export default interface ISetList {
	id: string;
	uri: UriString;
	name: string;
	songs: ISongData[];
}
