import { PageViewport, RenderTask } from 'pdfjs-dist';
import { RenderParameters } from 'pdfjs-dist/types/src/display/api';
import { useEffect, useRef } from 'react';

import Slide, { ISlideProps } from '../Slide/Slide';

export interface IPdfCanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
	viewport: PageViewport;
	render: (params: RenderParameters) => RenderTask;
}

const PdfCanvas = ({ viewport, render }: IPdfCanvasProps) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		if (canvasRef.current) {
			const context = canvasRef.current.getContext('2d');
			canvasRef.current.height = viewport.height;
			canvasRef.current.width = viewport.width;

			if (context) {
				render({
					canvasContext: context,
					viewport,
				})
					.promise.then(() => {
						console.log('completed');
					})
					.catch(err => {
						console.error(err);
					});
			}
		}
	}, [canvasRef, viewport, render]);

	return <canvas ref={canvasRef}></canvas>;
};

export default PdfCanvas;
