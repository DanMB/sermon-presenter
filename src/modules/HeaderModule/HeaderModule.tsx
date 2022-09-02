import { h } from 'preact';
import './HeaderModule.scss';

import { useEffect, useRef, useState } from 'preact/hooks';
import Plus from '@src/components/icons/Plus';

// import main from '../../ts/window';
import HeaderTab from '@src/components/HeaderTab/HeaderTab';
import TabStore, { useTabs } from '@src/ts/TabStore';
import CustomMap from '@src/types/CustomMap';
import ITabData from '@src/types/ITabData';
import { newtabUri, UriParts } from '@src/types/URIParts';
import CustomEvents, { Events } from '@src/ts/CustomEvents';
import { isOpen } from '@src/ts/presenter/hooks';

const digitExp = /^Digit\d+$/i;

const HeaderModule = () => {
	const tabs = useTabs(state => state.tabs);
	const active = useTabs(state => state.active);
	const setActive = useTabs(state => state.setActive);
	const moveActive = useTabs(state => state.moveActive);
	const tabData = useRef<CustomMap<ITabData>>(TabStore.allTabs);

	const presentingIsOpen = isOpen.use();

	useEffect(() => {
		tabData.current = TabStore.allTabs;
	}, [tabs]);

	const [isFocused, setIsFocus] = useState(true);

	const keyDown = (e: KeyboardEvent) => {
		if (!e.ctrlKey) return;

		if (e.key === 'Tab') {
			e.preventDefault();
			// if ctrl + tab
			// should move backward or forward
			if (e.shiftKey) {
				moveActive('-');
			} else {
				moveActive('+');
			}
		} else if (digitExp.test(e.code)) {
			e.preventDefault();
			// if ctrl + number
			let tab = parseInt(e.key) - 1;
			if (tab === -1) tab = 9;
			moveActive(tab);
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', keyDown);

		return function () {
			window.removeEventListener('keydown', keyDown);
		};
	}, []);

	return (
		<div class='Header'>
			<div class='nav'>
				<div class='tabs'>
					{tabs.map(tab => {
						if (tab === newtabUri) return null;

						return <HeaderTab key={tab} uri={tab} />;
					})}
				</div>
				<div
					class={`add ${active.toString() === newtabUri ? 'active' : ''}`}
					onClick={() => {
						setActive(newtabUri);
					}}
				>
					<Plus />
				</div>
			</div>
			<div class='control'>
				<div
					class={`present ${presentingIsOpen ? 'isPresenting' : ''}`}
					onClick={() => {
						CustomEvents.dispatch(Events.START);
					}}
				>
					<span>{presentingIsOpen ? 'Stop' : 'Start'}</span>
				</div>
			</div>
		</div>
	);
};

export default HeaderModule;
