import { h } from 'preact';
import './AddMusicModule.scss';

import { useEffect, useRef, useState } from 'preact/hooks';
import Plus from '@src/components/icons/Plus';
import Tabs, { useTabs } from '@src/ts/tabs/Tabs';
import SearchInput from '@src/components/Input/SearchInput';
import OurPraise from '@src/ts/OurPraise';
import ISearchHit from '@src/types/ISearchHit';
import Spinner from '@src/components/icons/Spinner';
import ISetList from '@src/types/ISetList';

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
				console.log(data);
				const songs = tab?.get().custom.songs ?? [];
				songs.push(data);
				tab.set({
					custom: {
						...tab.get().custom,
						songs,
					},
				});
			})
			.catch(err => {
				console.error(err);
			});
	};

	return (
		<div class='AddMusicModule'>
			<div class='title'>Songs</div>
			<SearchInput label={'Search songs'} placeholder={'Search songs'} onChange={onSearch} />
			{!!loadingQuery && <Spinner />}
			{!loadingQuery && hits && (
				<div class='searchResults'>
					{hits.map(song => {
						if (song._highlightResult.title.matchLevel!)
							return (
								<div
									class='result'
									key={song.path}
									onClick={() => {
										if (tab) addSong(song.objectID);
									}}
								>
									<div class='name' dangerouslySetInnerHTML={{ __html: song._highlightResult.title.value }}></div>
									<div class='author' dangerouslySetInnerHTML={{ __html: song._highlightResult.authors.value }}></div>
									<div class='icon'></div>
								</div>
							);
					})}
				</div>
			)}
		</div>
	);
};

export default AddMusicModule;
