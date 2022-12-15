import { PageViewport, RenderTask } from 'pdfjs-dist';
import { RenderParameters } from 'pdfjs-dist/types/src/display/api';

export interface IPdfSlide {
	index: number;
	text: string;
	viewport?: PageViewport;
	render?: (params: RenderParameters) => RenderTask;
}

export default interface IPdfSlides {
	fingerprints: string[];
	slides: IPdfSlide[];
}
