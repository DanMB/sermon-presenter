import { h } from 'preact';
import './SidebarModule.scss';

import { useEffect, useRef, useState } from 'preact/hooks';
import Plus from '@src/components/icons/Plus';

// import main from '../../ts/window';
import Tabs, { useTabs } from '@src/ts/tabs/Tabs';
import SearchInput from '@src/components/Input/SearchInput';
import OurPraise from '@src/ts/OurPraise';
import Settings from '@src/ts/Settings';
import Music from '@src/components/icons/Music';
import SidebarTab from '@src/components/SidebarTab/SidebarTab';
import Cog from '@src/components/icons/Cog';

const SidebarModule = () => {
	const sidebar = Settings.use(state => state.sidebar);

	useEffect(() => {
		// window.addEventListener('keydown', keyDown);

		return function () {
			// window.removeEventListener('keydown', keyDown);
		};
	}, []);

	const onSearch = (value: string) => {
		console.log(value);
		OurPraise.get()
			?.search(value)
			.then(results => {
				console.log(results);
			});
	};

	return (
		<div class='Sidebar'>
			{/* <SearchInput label='Search' placeholder='Search' onChange={onSearch} /> */}
			<div class='tabs'>
				<SidebarTab id={'music'} icon={<Music />} />
				<SidebarTab id={'settings'} icon={<Cog />} />
			</div>
			{sidebar ? <div class='content'></div> : <></>}
		</div>
	);
};

export default SidebarModule;
