import { h } from 'preact';
import './Tab.scss';

import { useEffect } from 'preact/hooks';
import Live from '@src/components/icons/Live';

import GroupIcon from '@src/components/icons/GroupIcon';
import TabStore, { useTabs } from '@src/ts/TabStore';
import { UriParts } from '@src/types/URIParts';
import { usePresent } from '@src/ts/PresentStore';
import Close from '../icons/Close';

const Tab = ({ uri }: { uri: string }) => {
	const active = useTabs(state => state.active);
	const isPresenting = usePresent(state => state.isPresenting);
	const presenting = usePresent(state => state.presenting);
	const setActive = useTabs(state => state.setActive);
	const remove = useTabs(state => state.remove);

	const parts = presenting ? presenting.split('/') : [];

	const presentingTab: string | undefined = parts[0];

	const tab = TabStore.getTab(uri);

	if (!tab) return null;

	const clickTab = (e: MouseEvent) => {
		// if ((e.target as HTMLElement).classList.contains('menu')) return;
		// setActive((e.currentTarget as HTMLElement).getAttribute('data-uri'));
		setActive(uri);
	};

	const closeTab = () => {
		remove(uri);
	};

	return (
		<div
			class={`Tab ${uri === active ? 'active' : ''} ${isPresenting && uri === presentingTab ? 'live' : ''}`}
			key={tab.id}
			data-id={tab.id}
			data-uri={uri}
			onClick={clickTab}
		>
			<span class='icon'>
				<GroupIcon />
			</span>
			<span class='name'>{tab.name}</span>
			<span class='indicator'>
				<Live />
			</span>
			<span class='close' onClick={closeTab}>
				<Close />
			</span>
		</div>
	);
};

export default Tab;
