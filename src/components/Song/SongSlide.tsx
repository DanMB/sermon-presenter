import './Song.scss';

import Slide, { ISlideProps } from '../Slide/Slide';

import { useTabs } from '@src/ts/tabs/Tabs';
import { cleanMultiline } from '@src/utils/textUtils';
import ISongSlide from '@src/types/ISongSlide';
import { current } from '@src/ts/presenter/hooks';
import { HTMLAttributes, useEffect, useState } from 'react';

export interface ISongSlideProps extends Partial<ISlideProps> {
	slide: string;
	listId: string;
	songId: string;
	index: number;
}

const SongSlide = ({ listId, songId, index, ...restProps }: ISongSlideProps) => {
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
			id: `${listId}/${songId}/${index}`,
		});
	}, [listId, songId, index]);

	return <Slide {...restProps} id={id} hotkey={hotkey.key !== '' ? hotkey : undefined} />;
	// useEffect(() => {
	// 	// setActiveSlide(active.parts[UriParts.SONG] === songId && active.parts[UriParts.SLIDE] === `${index}`);
	// }, [active]);

	// return (
	// 	<div
	// 		{...restProps}
	// 		id={slideData.id}
	// 		tabIndex={-1}
	// 		role='listitem'
	// 		className={`slide ${presentingCurrent === slideData.id ? 'active' : activeSlide ? 'subActive' : ''}`}
	// 	>
	// 		{slideData.key !== undefined && (
	// 			<div className='hotkey'>
	// 				{slideData.shift ? <li></li> : <></>}
	// 				{slideData.key}
	// 			</div>
	// 		)}
	// 		<div className='preview'>
	// 			<div className='textContent'>
	// 				<div className='inner'>{cleanMultiline(slide)}</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
};

export default SongSlide;
