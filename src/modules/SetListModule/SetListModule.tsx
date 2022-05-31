import { h } from 'preact';
import './SetListModule.scss';

import TabStore from '@src/ts/TabStore';
import CustomURI from '@src/types/CustomURI';
import Song from '@src/components/Song/Song';

const SetListModule = ({ uri }: { uri: CustomURI }) => {
	const data = TabStore.getTab(uri.toString());
	if (!data) return null;

	return (
		<div class='page SongsGroup' key={`grp${data.id}`}>
			{data.songs.map((song, i) => (
				<Song key={song.id} song={song} listId={data.id} index={i + 1} />
			))}
		</div>
	);
};

export default SetListModule;
