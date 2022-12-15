import { h } from 'preact';
import './SetListModule.scss';

import Song from '@src/components/Song/Song';
import ISetList from '@src/types/ISetList';
import Tab from '@src/ts/tabs/Tab';

const SetListModule = ({ tab }: { tab: Tab<ISetList> }) => {
	const data = tab.use(state => state.data);
	const id = tab.use(state => state.id);

	return (
		<div class='page SongsGroup' key={`${id}/group`}>
			{data.songs.map((song, i) => (
				<Song key={song.title} song={song} listId={id} index={i + 1} />
			))}
		</div>
	);
};

export default SetListModule;
