import './Song.scss';

import SongSlide from './SongSlide';
import CustomEvents, { Events } from '@src/ts/CustomEvents';
import IOurPraiseSong from '@src/types/IOurPraiseSong';
import { MouseEvent } from 'react';

const Song = ({ song, index, listId }: { song: IOurPraiseSong; index?: number; listId: string }) => {
	const onClick = (e: MouseEvent<HTMLDivElement>) => {
		CustomEvents.dispatch(Events.SLIDE, e.currentTarget.id);
	};

	return (
		<div className='SongComponent' tabIndex={0} role='list'>
			<div className='title'>
				{index && `#${index} `}
				{song.title}
			</div>
			<div className='slides'>
				{song.slides.map((slide, index) => (
					<SongSlide
						key={`${song.title}_sld${index}`}
						{...{ index, listId }}
						text={slide}
						songId={song.title}
						onClick={onClick}
					/>
				))}
			</div>
		</div>
	);
};

export default Song;
