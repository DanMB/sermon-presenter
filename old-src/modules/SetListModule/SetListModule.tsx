import './SetListModule.scss';

import Tabs from '@src/ts/tabs/Tabs';
import Song from '@src/components/Song/Song';
import ISetList from '@src/types/ISetList';

const SetListModule = ({ id }: { id: string }) => {
	const tab = Tabs.getTab<ISetList>(id);
	if (!tab) return null;

	const data = tab.use(state => state.data);

	return (
		<div className='page SongsGroup' key={`${id}/group`}>
			{data.songs.map((song, i) => (
				<Song key={song.title} song={song} listId={id} index={i + 1} />
			))}
		</div>
	);
};

export default SetListModule;
