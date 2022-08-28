import { h } from 'preact';
import './SetListModule.scss';

import TabStore from '@src/ts/TabStore';
import Song from '@src/components/Song/Song';

const SetListModule = ({ id }: { id: string }) => {
	const data = TabStore.getTab(id);
	if (!data) return null;

	return (
		<div class='page SongsGroup' key={`${id}/group`}>
			{data.data.songs.map((song, i) => (
				<Song key={song.id} song={song} listId={data.id} index={i + 1} />
			))}
		</div>
	);
};

export default SetListModule;
