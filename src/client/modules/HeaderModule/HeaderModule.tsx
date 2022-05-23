import { h } from 'preact';
import './HeaderModule.scss';

import { useEffect, useRef, useState } from 'preact/hooks';
import Plus from '@client/components/icons/Plus';

// import main from '../../ts/window';
import Tab from '@src/client/components/Tab/Tab';
import TabStore, { useTabs } from '@client/ts/TabStore';
import CustomMap from '@src/types/CustomMap';
import ITabData from '@src/types/ITabData';
import { newtabUri, UriParts } from '@src/types/URIParts';
import { useIsNeu } from '@client/ts/Window';

const digitExp = /^Digit\d+$/i;

const HeaderModule = () => {
	const tabs = useTabs(state => state.tabs);
	const active = useTabs(state => state.active);
	const setActive = useTabs(state => state.setActive);
	const tabData = useRef<CustomMap<ITabData>>(TabStore.allTabs);

	const activeTab = active?.limit(UriParts.ID)?.toString();

	useEffect(() => {
		tabData.current = TabStore.allTabs;
	}, [tabs]);

	const [isFocused, setIsFocus] = useState(true);

	const keyDown = (e: KeyboardEvent) => {
		if (!e.ctrlKey) return;

		if (e.key === 'Tab') {
			// if ctrl + tab
			let tabIndex = tabs.findIndex(tab => tab === activeTab);

			// should move backward or forward
			if (e.shiftKey) {
				tabIndex--;
				if (tabIndex < 0) tabIndex = tabs.length;
			} else {
				tabIndex++;
				if (tabIndex > tabs.length) tabIndex = 0;
			}

			// make sure tab exists
			const newTab = tabs[tabIndex];
			if (!newTab) return;

			setActive(newTab);
		} else if (digitExp.test(e.code)) {
			// if ctrl + number
			let tab = parseInt(e.key) - 1;
			if (tab === -1) tab = 9;

			let newTab = tabs[tab];
			if (!newTab) return;

			setActive(newTab);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', keyDown);
		// const tabsMap = TabStore.allTabs;

		// tabsMap.mutate(tab => {
		// 	const data = main
		// 		.invoke('invoke:getSetList', {
		// 			id: tab.id,
		// 		})
		// 		.then((response: ITabData) => {
		// 			if (!response) {
		// 				return response;
		// 			} else {
		// 				return response;
		// 			}
		// 		});

		// 	return data;
		// });

		const windowFocus = () => {};

		const windowBlur = () => {};

		// main.on('window:focus', windowFocus);
		// main.on('window:blur', windowBlur);

		return function () {
			document.removeEventListener('keydown', keyDown);
			// main.off('window:focus', windowFocus);
			// main.off('window:blur', windowBlur);
		};
	}, []);

	return (
		<div class='Header'>
			<div class={`background ${isFocused ? 'focused' : ''}`}></div>
			<div class='nav'>
				<div class='tabs'>
					{tabs.map(tab => (
						<Tab uri={tab} />
					))}
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
			<div class='present'>
				<span>Presentér</span>
			</div>
		</div>
	);
};

export default HeaderModule;
