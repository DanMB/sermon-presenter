import { h } from 'preact';
import './AddMusicModule.scss';

import { useEffect, useRef, useState } from 'preact/hooks';
import Plus from '@src/components/icons/Plus';
import Tabs, { useTabs } from '@src/ts/tabs/Tabs';
import SearchInput from '@src/components/Input/SearchInput';
import OurPraise from '@src/ts/OurPraise';

const AddMusicModule = () => {
	const onSearch = (value: string) => {
		// console.log(value);
		// OurPraise
		// 	?.search(value)
		// 	.then(results => {
		// 		console.log(results);
		// 	});
	};

	return (
		<div class='AddMusicModule'>
			<div class='title'>Songs</div>
			<SearchInput label={'Search songs'} placeholder={'Search songs'} onChange={onSearch} />
		</div>
	);
};

export default AddMusicModule;
