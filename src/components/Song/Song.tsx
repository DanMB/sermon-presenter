import { h } from 'preact';
import './Song.scss';

import { useContext, useEffect, useRef } from 'preact/hooks';
import ISongData from '@src/types/ISongData';
import { useTabs } from '@src/ts/tabs/Tabs';
import { cleanMultiline } from '@src/utils/textUtils';
import SongSlide from './SongSlide';
import CustomEvents, { Events } from '@src/ts/CustomEvents';
import PresentWindow from '@src/ts/presenter/PresentWindow';
import IOurPraiseSong from '@src/types/IOurPraiseSong';

const digitExp = /^Digit\d+$/i;

const Song = ({ song, index, listId }: { song: IOurPraiseSong; index?: number; listId: string }) => {
	// const isActive = useRef<boolean>(activeSong === song.id);
	// const slideI = useRef<number>(activeSong === song.id ? parseInt(activeSlide) : -1);

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
				const el = items[focusOn] as HTMLElement;
				if (el) {
					if (el == document.activeElement) {
						el.click();
					} else {
						el.focus();
					}
				}
			}
		};

		if (container.current) container.current.addEventListener('keydown', keydown);

		return function () {
			if (container.current) container.current.removeEventListener('keydown', keydown);
		};
	}, []);

	const onClick = (e: h.JSX.TargetedEvent<HTMLDivElement>) => {
		// console.log('onClick', e.currentTarget.id);
		CustomEvents.dispatch(Events.SLIDE, e.currentTarget.id);
	};

	const onFocus = (e: h.JSX.TargetedEvent<HTMLDivElement>) => {
		// console.log('onFocus', e.currentTarget.id, PresentWindow.get()?.current !== e.currentTarget.id);
		if (PresentWindow.get()?.current !== e.currentTarget.id) {
			CustomEvents.dispatch(Events.SLIDE, e.currentTarget.id);
		}
	};

	return (
		<div class='SongComponent' ref={container} tabIndex={0} role='list'>
			<div class='title'>
				{index && `#${index} `}
				{song.title}
			</div>
			<div class='slides' ref={slidesRef}>
				{song.slides.map((slide, index) => (
					<SongSlide
						key={`${song.title}_sld${index}`}
						{...{ index, listId }}
						text={slide}
						songId={song.title}
						onClick={onClick}
						onFocus={onFocus}
					/>
				))}
			</div>
		</div>
	);
};

export default Song;
