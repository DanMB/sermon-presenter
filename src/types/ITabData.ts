import { UriString } from './CustomURI';
import ISetList from './ISetList';

export default interface ITabData extends ISetList {
	activeSong: string | undefined;
	activeSlide: number;
}
