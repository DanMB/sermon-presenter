import { h } from 'preact';
import './AddMusicModule.scss';

import { useEffect, useRef, useState } from 'preact/hooks';
import Plus from '@src/components/icons/Plus';
import Tabs, { useTabs } from '@src/ts/tabs/Tabs';
import SearchInput from '@src/components/Input/SearchInput';
import OurPraise from '@src/ts/OurPraise';
import ISearchHit from '@src/types/ISearchHit';
import Spinner from '@src/components/icons/Spinner';

const AddMusicModule = () => {
	const [loadingQuery, setLoadingQuery] = useState<string>('');
	const [hits, setHits] = useState<ISearchHit[]>([]);

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

	return (
		<div class='AddMusicModule'>
			<div class='title'>Songs</div>
			<SearchInput label={'Search songs'} placeholder={'Search songs'} onChange={onSearch} />
			{!!loadingQuery && <Spinner />}
			{!loadingQuery &&
				hits &&
				hits.map(song => (
					<div class='searchHit' key={song.path}>
						<div class='name'>{song.title}</div>
						<div class='author'>{song.authors}</div>
						<div class='icon'></div>
					</div>
				))}
		</div>
	);
};

export default AddMusicModule;
