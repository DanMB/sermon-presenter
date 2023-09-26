import './AddMusicModule.scss';

import Plus from '@src/components/icons/Plus';
import Tabs, { useTabs } from '@src/ts/tabs/Tabs';
import SearchInput from '@src/components/Input/SearchInput';
import OurPraise from '@src/ts/OurPraise';
import ISearchHit from '@src/types/ISearchHit';
import Spinner from '@src/components/icons/Spinner';
import ISetList from '@src/types/ISetList';
import { useState, useEffect } from 'react';
import ToastManager from '../ToastModule/ToastManager';

const AddMusicModule = () => {
	const [loadingQuery, setLoadingQuery] = useState<string>('');
	const [hits, setHits] = useState<ISearchHit[]>([]);

	const active = useTabs(state => state.active);
	const tab = Tabs.getTab<ISetList>(active);

	const onSearch = (value: string) => {
		setLoadingQuery(value.trim());
	};

	useEffect(() => {
		if (!!loadingQuery) {
			OurPraise?.search(loadingQuery).then(results => {
				if (results.query === loadingQuery) {
					setLoadingQuery('');
					setHits(results.hits);
				}
			});
		}
	}, [loadingQuery]);

	const addSong = (id: string) => {
		if (!tab) return;
		if (tab.get().data.songs.some(song => song.id === id)) return;
		if (tab.get().custom.songs?.some(song => song.id === id)) return;

		OurPraise?.getSong(id)
			.then(data => {
				const songs = tab.get().data.songs;
				songs.push(data);
				tab.set({
					data: {
						...tab.get().data,
						songs,
					},
				});
			})
			.catch((err: Error) => {
				ToastManager.add({
					id: `failed-song-add_${id}`,
					title: 'Failed to add song',
					text: err.message,
					theme: 'negative',
				});
				console.error(err);
			});
	};

	return (
		<div className='AddMusicModule'>
			<div className='title'>Songs</div>
			<SearchInput label={'Search songs'} placeholder={'Search songs'} onChange={onSearch} />
			{!!loadingQuery && <Spinner />}
			{!loadingQuery && hits && (
				<div className='searchResults'>
					{hits.map(song => {
						if (song._highlightResult.title.matchLevel!)
							return (
								<div
									className='result'
									key={song.path}
									onClick={() => {
										if (tab) addSong(song.objectID);
									}}
								>
									<div className='name' dangerouslySetInnerHTML={{ __html: song._highlightResult.title.value }}></div>
									<div
										className='author'
										dangerouslySetInnerHTML={{ __html: song._highlightResult.authors.value }}
									></div>
									<div className='icon'></div>
								</div>
							);
					})}
				</div>
			)}
		</div>
	);
};

export default AddMusicModule;
