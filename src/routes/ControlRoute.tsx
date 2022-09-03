import { h } from 'preact';

import { useEffect } from 'preact/hooks';
import HeaderModule from '@src/modules/HeaderModule/HeaderModule';
import Tabs, { useTabs } from '@src/ts/tabs/Tabs';
import NewTabModule from '@src/modules/NewTabModule/NewTabModule';
import { newtabUri, TabType, UriParts } from '@src/types/URIParts';
import SetListModule from '@src/modules/SetListModule/SetListModule';
import OurPraise from '@src/ts/OurPraise';
import SidebarModule from '@src/modules/SidebarModule/SidebarModule';
import CustomEvents, { Events } from '@src/ts/CustomEvents';
import PresentWindow from '@src/ts/presenter/PresentWindow';

const ControlRoute = () => {
	const active = useTabs(state => state.active);

	const keyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			e.preventDefault();
			CustomEvents.dispatch(Events.CLEAR);
		}
	};

	const startShow = () => {
		new PresentWindow();
	};

	useEffect(() => {
		window.addEventListener('keydown', keyDown);
		CustomEvents.listen(Events.START, startShow);

		return function () {
			window.removeEventListener('keydown', keyDown);
			CustomEvents.remove(Events.START, startShow);
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
