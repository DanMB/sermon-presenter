import { h } from 'preact';

import { useEffect, useState } from 'preact/hooks';
import Slide, { ISlideProps } from '../Slide/Slide';

export interface IPdfSlideProps extends Partial<ISlideProps> {
	pdfId: string;
	index: number;
}

const PdfSlide = ({ pdfId, index, ...restProps }: IPdfSlideProps) => {
	const [{ id, ...hotkey }, setSlideData] = useState<{ key: string; shift: boolean; id: string }>({
		key: '',
		shift: false,
		id: `${index}`,
	});

	useEffect(() => {
		let key: number | undefined = index + 1;
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
			id: `${pdfId}/${index}`,
		});
	}, [pdfId, index]);

	return <Slide {...restProps} id={id} hotkey={hotkey.key !== '' ? hotkey : undefined} />;
};

export default PdfSlide;
