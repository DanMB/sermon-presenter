import { IPdfSlide } from '@src/types/IPdfSlides';
import { ISlideProps } from '../Slide/Slide';
import PdfFiles from '@src/ts/PdfFiles';
import { useEffect, useRef } from 'react';

export interface IPdfSlideProps extends Partial<ISlideProps> {
	slide: IPdfSlide;
	pdfId: string;
}

const PdfSlide = ({ slide, pdfId, ...restProps }: IPdfSlideProps) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const render = async () => {
		if (!canvasRef.current) return;
		const context = canvasRef.current.getContext('2d');
		if (!context) return;

		const pdf = await PdfFiles.get(pdfId).catch(() => {
			return undefined;
		});

		if (!pdf) return;

		const page = await pdf.getPage(slide.index).catch(err => {
			console.error(err);
			return null;
		});
		if (!page) return;

		const viewport = page.getViewport({ scale: 1 });

		canvasRef.current.height = viewport.height;
		canvasRef.current.width = viewport.width;

		page
			.render({
				canvasContext: context,
				viewport,
			})
			.promise.catch(err => {
				console.error(err);
			});
	};

	useEffect(() => {
		render();
	}, [pdfId, slide.index, canvasRef]);

	return <canvas ref={canvasRef}></canvas>;
};

export default PdfSlide;
