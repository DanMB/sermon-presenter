import { h } from 'preact';
import './PdfSlidesModule.scss';

import Song from '@src/components/Song/Song';
import Tab from '@src/ts/tabs/Tab';
import IPdfSlides from '@src/types/IPdfSlides';
import PdfSlide from '@src/components/PdfSlide/PdfSlide';

const PdfSlidesModule = ({ tab }: { tab: Tab<IPdfSlides> }) => {
	const data = tab.use(state => state.data);
	const id = tab.use(state => state.id);

	// <Song key={song.title} song={song} listId={id} index={i + 1} />

	return (
		<div class='page PdfGroup' key={`${id}/group`} role='list'>
			{data.slides.map(slide => (
				<PdfSlide
					key={slide.index}
					pdfId={data.fingerprints.join('.')}
					index={slide.index}
					tabIndex={0}
					onClick={onClick}
					onFocus={onFocus}
				/>
			))}
		</div>
	);
};

export default PdfSlidesModule;
