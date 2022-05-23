import ISongSlide from './ISongSlide';

export default interface ISongData {
	id: string;
	name: string;
	slides: ISongSlide[];
}
