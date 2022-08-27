import { h } from 'preact';

import { useEffect } from 'preact/hooks';
import HeaderModule from '@src/modules/HeaderModule/HeaderModule';
import TabStore, { useTabs } from '@src/ts/TabStore';
import NewTabModule from '@src/modules/NewTabModule/NewTabModule';
import { newtabUri, TabType, UriParts } from '@src/types/URIParts';
import SetListModule from '@src/modules/SetListModule/SetListModule';
import OurPraise from '@src/ts/OurPraise';
import SidebarModule from '@src/modules/SidebarModule/SidebarModule';
import { usePresent } from '@src/ts/PresentStore';

const ControlRoute = () => {
	const active = useTabs(state => state.active);
	const setPresenting = usePresent(state => state.setPresenting);

	const keyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			e.preventDefault();
			setPresenting(undefined);
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', keyDown);

		return function () {
			window.removeEventListener('keydown', keyDown);
		};
	}, []);

	return (
		<div class='Control'>
			<SidebarModule />
			<div class='main'>
				<HeaderModule />
				{active == newtabUri ? <NewTabModule /> : <SetListModule id={active} />}
			</div>

			{/* <ContextMenu /> */}
		</div>
	);
};

export default ControlRoute;
