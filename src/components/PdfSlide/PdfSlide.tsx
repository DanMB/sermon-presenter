import { IPdfSlide } from '@src/types/IPdfSlides';
import Slide, { ISlideProps } from '../Slide/Slide';
import PdfFiles from '@src/ts/PdfFiles';
import { cleanMultiline } from '@src/utils/textUtils';
import { useEffect, useRef, useState } from 'react';

export interface IPdfSlideProps extends Partial<ISlideProps> {
	slide: IPdfSlide;
	pdfId: string;
}

const PdfSlide = ({ slide, pdfId, ...restProps }: IPdfSlideProps) => {
	const [{ id, ...hotkey }, setSlideData] = useState<{ key: string; shift: boolean; id: string }>({
		key: '',
		shift: false,
		id: `${slide.index}`,
	});

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [ready, setReady] = useState<boolean>(false);

	useEffect(() => {
		let key: number | undefined = slide.index;
		let shift = false;
		if (key > 10) {
			shift = true;
			key -= 10;
		}
		if (key === 10) key = 0;

		if (key > 10) {
			key = undefined;
		}

		setSlideData({
			key: `${key}`,
			shift,
			id: `${pdfId}/${slide.index}`,
		});
	}, [pdfId, slide.index]);

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
			.promise.then(() => {
				setReady(true);
			})
			.catch(err => {
				console.error(err);
			});
	};

	useEffect(() => {
		render();
	}, [pdfId, slide.index, canvasRef]);

	return (
		<Slide {...restProps} text={slide.text} id={id} hotkey={hotkey.key !== '' ? hotkey : undefined}>
			<canvas className={`${ready ? 'ready' : 'loading'}`} ref={canvasRef}></canvas>
			{ready ? (
				<></>
			) : (
				<div className='textContent'>
					<div className='inner'>{cleanMultiline(slide.text)}</div>
				</div>
			)}
		</Slide>
	);
};

export default PdfSlide;
