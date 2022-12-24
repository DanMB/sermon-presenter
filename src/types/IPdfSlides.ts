export interface IPdfSlide {
	index: number;
	text: string;
	fileId: string;
}

export default interface IPdfSlides {
	fingerprints: string[];
	slides: IPdfSlide[];
}
