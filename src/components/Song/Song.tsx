import { h } from 'preact';
import './Song.scss';

import { useContext, useEffect, useRef } from 'preact/hooks';
import ISongData from '@src/types/ISongData';
import { useTabs } from '@src/ts/TabStore';
import { UriParts } from '@src/types/URIParts';
import { cleanMultiline } from '@src/utils/textUtils';

const digitExp = /^Digit\d+$/i;

const Song = ({ song, index }: { song: ISongData; index?: number }) => {
	const active = useTabs(state => state.active);
	const activeSong = active.parts[UriParts.SONG];
	const activeSlide = active.parts[UriParts.SLIDE];

	const isActive = useRef<boolean>(activeSong === song.id);
	const slideI = useRef<number>(activeSong === song.id ? parseInt(activeSlide) : -1);

	const keyDown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowRight') {
			if (!isActive.current) slideI.current = 0;
			else if (slideI.current > song.slides.length) slideI.current = 0;
			else slideI.current++;
		} else if (e.key === 'ArrowLeft') {
			if (!isActive.current) slideI.current = song.slides.length;
			else if (slideI.current <= 0) slideI.current = song.slides.length;
			else slideI.current--;
		} else if (digitExp.test(e.code)) {
			let index = parseInt(e.key) - 1;
			if (index === -1) index = 9;
			if (e.shiftKey) index = +10;
			let indexedSlide = song.slides[index];
			if (!indexedSlide) return;
			slideI.current = index;
		}
	};

	return (
		<div class='SongComponent' tabIndex={0} onKeyDown={keyDown}>
			<div class='title'>
				{index && `#${index} `}
				{song.name}
			</div>
			<div class='slides'>
				{song.slides.map((slide, i) => {
					let key = i;
					let shift = false;
					if (key > 10) {
						shift = true;
						key -= 10;
					}
					if (key === 10) key = 0;

					return (
						<div
							key={`${song.id}_sld${i}`}
							id={`${i}`}
							class={`slide ${slideI.current === i ? (isActive.current ? 'active' : 'subActive') : ''}`}
							onClick={() => {
								// main.send('function:start', {
								// 	file: data.file,
								// 	slide: slide.number,
								// });
							}}
						>
							<div class='hotkey'>
								{shift ? <li></li> : <></>}
								{key}
							</div>
							<div class='preview'>
								<div class='textContent'>
									<div class='inner'>{cleanMultiline(slide.text)}</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Song;
