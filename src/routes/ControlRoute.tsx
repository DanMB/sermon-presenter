import { h } from 'preact';

import { useEffect } from 'preact/hooks';
import HeaderModule from '@src/modules/HeaderModule/HeaderModule';
import TabStore, { useTabs } from '@src/ts/TabStore';
import NewTabModule from '@src/modules/NewTabModule/NewTabModule';
import { newtabUri, TabType, UriParts } from '@src/types/URIParts';
import SetListModule from '@src/modules/SetListModule/SetListModule';
import OurPraise from '@src/ts/OurPraise';
import SidebarModule from '@src/modules/SidebarModule/SidebarModule';

const ControlRoute = () => {
	const active = useTabs(state => state.active);

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
