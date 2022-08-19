import { h } from 'preact';

import { useEffect } from 'preact/hooks';
import HeaderModule from '@src/modules/HeaderModule/HeaderModule';
import TabStore, { useTabs } from '@src/ts/TabStore';
import NewTabModule from '@src/modules/NewTabModule/NewTabModule';
import { TabType, UriParts } from '@src/types/URIParts';
import SetListModule from '@src/modules/SetListModule/SetListModule';

const ControlRoute = () => {
	const active = useTabs(state => state.active);
	const activeType = active.parts[UriParts.TYPE];

	useEffect(() => {}, []);

	return (
		<div class='Control'>
			<HeaderModule />
			{activeType === TabType.SETLIST ? <SetListModule uri={active} /> : <NewTabModule />}
			{/* <ContextMenu /> */}
		</div>
	);
};

export default ControlRoute;
