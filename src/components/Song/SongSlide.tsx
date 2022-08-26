import { h } from 'preact';
import './Song.scss';

import { useEffect, useState } from 'preact/hooks';
import { useTabs } from '@src/ts/TabStore';
import { TabType, UriParts } from '@src/types/URIParts';
import { cleanMultiline } from '@src/utils/textUtils';
import { usePresent } from '@src/ts/PresentStore';
import CustomURI from '@src/types/CustomURI';
import ISongSlide from '@src/types/ISongSlide';

export interface ISongSlideProps extends h.JSX.HTMLAttributes<HTMLDivElement> {
	slide: string;
	listId: string;
	songId: string;
	index: number;
}

const SongSlide = ({ slide, listId, songId, index, ...restProps }: ISongSlideProps) => {
	const active = useTabs(state => state.active);
	const presenting = usePresent(state => state.presenting);

	const [slideData, setSlideData] = useState<{ key?: number; shift: boolean; uri: string }>({
		key: undefined,
		shift: false,
		uri: `${index}`,
	});
	const [activeSlide, setActiveSlide] = useState<boolean>(false);
	const [presentingSlide, setPresentingSlide] = useState<boolean>(false);

	useEffect(() => {
		// const uri = new CustomURI([TabType.SETLIST, listId, songId, `${index}`]).toString();

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
			key,
			shift,
			uri: `${index}`,
		});
	}, [listId, songId, index]);

	useEffect(() => {
		// setActiveSlide(active.parts[UriParts.SONG] === songId && active.parts[UriParts.SLIDE] === `${index}`);
	}, [active]);

	useEffect(() => {
		if (!presenting) {
			setPresentingSlide(false);
		} else {
			// setPresentingSlide(presenting.parts[UriParts.SONG] === songId && presenting.parts[UriParts.SLIDE] === `${index}`);
		}
	}, [presenting]);

	return (
		<div
			{...restProps}
			id={slideData.uri}
			tabIndex={-1}
			role='listitem'
			class={`slide ${presentingSlide ? 'active' : activeSlide ? 'subActive' : ''}`}
		>
			{slideData.key !== undefined && (
				<div class='hotkey'>
					{slideData.shift ? <li></li> : <></>}
					{slideData.key}
				</div>
			)}
			<div class='preview'>
				<div class='textContent'>
					<div class='inner'>{cleanMultiline(slide)}</div>
				</div>
			</div>
		</div>
	);
};

export default SongSlide;
