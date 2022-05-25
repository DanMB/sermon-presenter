import { h } from 'preact';
import './SetListModule.scss';

import { useContext, useEffect, useRef } from 'preact/hooks';

import TabStore, { useTabs } from '@src/ts/TabStore';
import CustomURI from '@src/types/CustomURI';
import Song from '@src/components/Song/Song';
import { UriParts } from '@src/types/URIParts';

const digitExp = /^Digit\d+$/i;

const SetListModule = ({ uri }: { uri: CustomURI }) => {
	// const isPresenting = useTabs().isPresenting;
	// const presenting = useTabs().presenting;

	// const presentingUri = new CustomURI(presenting);

	const data = TabStore.getTab(uri.toString());
	const activeSong = uri.parts[UriParts.SONG];

	if (!data) return null;

	// const songI = useRef<number>(0);
	// const song = useRef<ISongData>(data.songs[0]);

	// songI.current = data.songs.findIndex(s => s.id === data.activeSong);
	// if (songI.current < 0) songI.current = 0;
	// if (songI.current > data.songs.length - 1) songI.current = data.songs.length - 1;

	// song.current = data.songs[songI.current];

	// const keyDown = (e: KeyboardEvent) => {
	// 	if (e.key === 'ArrowRight') {
	// 		let current = data.activeSlide + 1;
	// 		if (current > data.slides.length) current = 0;
	// 	} else if (e.key === 'ArrowLeft') {
	// 		let current = data.activeSlide - 1;
	// 		if (current < 0) current = data.slides.length;
	// 	} else if (digitExp.test(e.code)) {
	// 		let index = parseInt(e.key) - 1;
	// 		if (index === -1) index = 9;
	// 		if (e.shiftKey) index = +10;
	// 		let slide = data.slides[index];
	// 		if (!slide) return;
	// 		// dispatch({
	// 		// 	type: 'viewGroup',
	// 		// 	value: slide.number,
	// 		// });
	// 	}
	// };

	// useEffect(() => {
	// 	document.addEventListener('keydown', keyDown);

	// 	// main.send('function:start', {
	// 	// 	file: data.file,
	// 	// 	slide: 0,
	// 	// });

	// 	return function () {
	// 		document.removeEventListener('keydown', keyDown);
	// 	};
	// }, []);

	return (
		<div class='page SongsGroup' key={`grp${data.id}`}>
			{data.songs.map((song, i) => (
				<Song key={song.id} song={song} index={i + 1} />
			))}
		</div>
	);
};

export default SetListModule;
