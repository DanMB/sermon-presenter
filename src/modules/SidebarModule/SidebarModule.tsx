import { h } from 'preact';
import './SidebarModule.scss';

import { useEffect, useRef, useState } from 'preact/hooks';
import Plus from '@src/components/icons/Plus';

// import main from '../../ts/window';
import Tab from '@src/components/Tab/Tab';
import TabStore, { useTabs } from '@src/ts/TabStore';
import CustomMap from '@src/types/CustomMap';
import ITabData from '@src/types/ITabData';
import { newtabUri, UriParts } from '@src/types/URIParts';
import { usePresent } from '@src/ts/PresentStore';
import SearchInput from '@src/components/Input/SearchInput';
import OurPraise from '@src/ts/OurPraise';

const SidebarModule = () => {
	const tabs = useTabs(state => state.tabs);
	const active = useTabs(state => state.active);

	const isPresenting = usePresent(state => state.isPresenting);
	const setIsPresenting = usePresent(state => state.setIsPresenting);

	const keyDown = (e: KeyboardEvent) => {};

	useEffect(() => {
		window.addEventListener('keydown', keyDown);

		return function () {
			window.removeEventListener('keydown', keyDown);
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
			<div
				class={`present ${isPresenting ? 'isPresenting' : ''}`}
				onClick={() => {
					setIsPresenting(!isPresenting);
				}}
			>
				<span>{isPresenting ? 'Stop' : 'Start'}</span>
			</div>
			<SearchInput label='Search' placeholder='Search' onChange={onSearch} />
		</div>
	);
};

export default SidebarModule;
