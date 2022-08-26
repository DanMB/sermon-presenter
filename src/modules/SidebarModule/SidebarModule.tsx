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
import Input from '@src/components/Input/Input';

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

	const onSearch = (value: string) => {};

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
			<Input label='Search' placeholder='Search' onChange={onSearch} />
		</div>
	);
};

export default SidebarModule;
