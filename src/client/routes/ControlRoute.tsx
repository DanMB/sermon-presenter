import { h } from 'preact';

import { useEffect } from 'preact/hooks';
import HeaderModule from '@client/modules/HeaderModule/HeaderModule';
import TabStore, { useTabs } from '@client/ts/TabStore';
import NewTabModule from '@client/modules/NewTabModule/NewTabModule';
import { TabType, UriParts } from '@src/types/URIParts';
import SetListModule from '@client/modules/SetListModule/SetListModule';

const ControlRoute = () => {
	const active = useTabs(state => state.active);
	const activeType = active.parts[UriParts.TYPE];

	useEffect(() => {
		const onWindowClose = () => {
			Neutralino.app.exit();
		};

		if (Neutralino) {
			Neutralino.init();

			Neutralino.events.on('windowClose', onWindowClose);
		}

		return function () {
			if (Neutralino) {
				Neutralino.events.off('windowClose', onWindowClose);
			}
		};
	}, []);

	return (
		<div class='Control'>
			<HeaderModule />
			{activeType === TabType.SETLIST ? <SetListModule uri={active} /> : <NewTabModule />}
			{/* <ContextMenu /> */}
		</div>
	);
};

export default ControlRoute;
