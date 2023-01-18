import { h } from 'preact';
import './SetListModule.scss';

import Tabs from '@src/ts/tabs/Tabs';
import Song from '@src/components/Song/Song';
import ISetList from '@src/types/ISetList';

const SetListModule = ({ id }: { id: string }) => {
	const tab = Tabs.getTab<ISetList>(id);
	if (!tab) return null;

	const data = tab.use(state => state.data);
	const custom = tab.use(state => state.custom);

	return (
		<div class='page SongsGroup' key={`${id}/group`}>
			{data.songs.map((song, i) => (
				<Song key={song.title} song={song} listId={id} index={i + 1} />
			))}
			{custom.songs?.map((song, i) => (
				<Song key={song.title} song={song} listId={id} index={i + 1 + data.songs.length} />
			))}
		</div>
	);
};

export default SetListModule;
