import { h } from 'preact';
import './Song.scss';

import { useContext, useEffect, useRef } from 'preact/hooks';
import ISongData from '@src/types/ISongData';
import { useTabs } from '@src/ts/TabStore';
import { TabType, UriParts } from '@src/types/URIParts';
import { cleanMultiline } from '@src/utils/textUtils';
import { usePresent } from '@src/ts/PresentStore';
import CustomURI from '@src/types/CustomURI';
import SongSlide from './SongSlide';

const digitExp = /^Digit\d+$/i;

const Song = ({ song, index, listId }: { song: ISongData; index?: number; listId: string }) => {
	const active = useTabs(state => state.active);
	const setActive = useTabs(state => state.setActive);
	const isPresenting = usePresent(state => state.isPresenting);
	const setPresenting = usePresent(state => state.setPresenting);
	const activeSong = active.parts[UriParts.SONG];
	const activeSlide = active.parts[UriParts.SLIDE];

	const isActive = useRef<boolean>(activeSong === song.id);
	const slideI = useRef<number>(activeSong === song.id ? parseInt(activeSlide) : -1);

	const slidesRef = useRef<HTMLDivElement | null>(null);
	const container = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const items = slidesRef.current
			? [...slidesRef.current.children].filter(
					el => el.getAttribute('role') === 'listitem' && el.getAttribute('tabindex') === '-1'
			  )
			: [];

		const moveFocus = (dir: 1 | -1, end: boolean = false) => {
			const active = document.activeElement;
			if (!slidesRef.current) return;

			if (!active || container.current === active) {
				let focusOn = 0;
				if (dir === -1) focusOn = items.length - 1;
				if (items[focusOn]) (items[focusOn] as HTMLElement)?.focus();
				return;
			}

			if (active && !slidesRef.current.contains(active)) return;

			for (let i = 0; i < items.length; i++) {
				const item = items[i];
				if (item === active || item?.contains(active)) {
					let focusOn = i + dir;
					if (end) {
						if (dir === 1) focusOn = items.length - 1;
						else focusOn = 0;
					} else {
						if (focusOn >= items.length) focusOn = 0;
						else if (focusOn < 0) focusOn = items.length - 1;
					}
					(items[focusOn] as HTMLElement)?.focus();
					break;
				}
			}
		};

		const keydown = (e: KeyboardEvent) => {
			if (!slidesRef.current) return;

			if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && !e.ctrlKey) {
				e.preventDefault();
				moveFocus(-1);
			} else if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && !e.ctrlKey) {
				e.preventDefault();
				moveFocus(1);
			} else if (e.key === 'Home' || ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && e.ctrlKey)) {
				e.preventDefault();
				moveFocus(-1, true);
			} else if (e.key === 'End' || ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && e.ctrlKey)) {
				e.preventDefault();
				moveFocus(1, true);
			} else if (digitExp.test(e.code)) {
				let focusOn = parseInt(e.key) - 1;
				if (focusOn === -1) focusOn = 9;
				if (e.shiftKey) focusOn = +10;
				if (focusOn > items.length - 1) focusOn = items.length - 1;
				if (focusOn < 0) focusOn = 0;
				(items[focusOn] as HTMLElement)?.focus();
			}
		};

		if (container.current) container.current.addEventListener('keydown', keydown);

		return function () {
			if (container.current) container.current.removeEventListener('keydown', keydown);
		};
	}, []);

	const onFocusOrClick = (e: h.JSX.TargetedEvent<HTMLDivElement>) => {
		setActive(e.currentTarget.id);
		if (isPresenting) {
			setPresenting(e.currentTarget.id);
		}
	};

	return (
		<div class='SongComponent' ref={container} tabIndex={0} role='list'>
			<div class='title'>
				{index && `#${index} `}
				{song.name}
			</div>
			<div class='slides' ref={slidesRef}>
				{song.slides.map((slide, index) => (
					<SongSlide
						key={`${song.id}_sld${index}`}
						{...{ slide, index, listId }}
						songId={song.id}
						onClick={onFocusOrClick}
						onFocus={onFocusOrClick}
					/>
				))}
			</div>
		</div>
	);
};

export default Song;