import { h } from 'preact';
import './HeaderModule.scss';

import { useEffect, useRef, useState } from 'preact/hooks';
import Plus from '@src/components/icons/Plus';

// import main from '../../ts/window';
import HeaderTab from '@src/components/HeaderTab/HeaderTab';
import Tabs, { useTabs } from '@src/ts/tabs/Tabs';
import CustomMap from '@src/types/CustomMap';
import ITabData from '@src/types/ITabData';
import { newtabUri, UriParts } from '@src/types/URIParts';
import CustomEvents, { Events } from '@src/ts/CustomEvents';
import { blackedOut, cleared, isOpen } from '@src/ts/presenter/hooks';
import PresentWindow from '@src/ts/presenter/PresentWindow';

const digitExp = /^Digit\d+$/i;

const HeaderModule = () => {
	const tabs = useTabs(state => state.tabs);
	const active = useTabs(state => state.active);

	const presentingIsOpen = isOpen.use();
	const isBlackedOut = blackedOut.use();
	const isCleared = cleared.use();

	const keyDown = (e: KeyboardEvent) => {
		if (!e.ctrlKey) return;

		if (digitExp.test(e.code)) {
			e.preventDefault();
			// if ctrl + number
			let tab = parseInt(e.key) - 1;
			if (tab === -1) tab = 9;
			Tabs.move(tab);
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
					{tabs.map(id => {
						const tab = Tabs.getTab(id);
						if (!tab || id === newtabUri) return null;

						return <HeaderTab key={id} tab={tab} />;
					})}
				</div>
				<div
					class={`add ${active.toString() === newtabUri ? 'active' : ''}`}
					onClick={() => {
						Tabs.set({
							active: newtabUri,
						});
					}}
				>
					<Plus />
				</div>
			</div>
			<div class='control'>
				<div
					class={`stateButton ${!presentingIsOpen ? 'disabled' : isBlackedOut ? 'active' : ''}`}
					onClick={PresentWindow.blackout}
				>
					<span>BL</span>
				</div>
				<div
					class={`stateButton ${
						!presentingIsOpen ? 'disabled' : isBlackedOut ? 'pen active' : isCleared ? 'active' : ''
					}`}
					onClick={PresentWindow.clear}
				>
					<span>CL</span>
				</div>
				<div
					class={`present ${presentingIsOpen ? 'isPresenting' : ''}`}
					onClick={() => {
						if (presentingIsOpen) {
							PresentWindow.stop();
						} else {
							PresentWindow.start();
						}
					}}
				>
					<span>{presentingIsOpen ? 'Stop' : 'Start'}</span>
				</div>
			</div>
		</div>
	);
};

export default HeaderModule;
