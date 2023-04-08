import HeaderModule from '@src/modules/HeaderModule/HeaderModule';
import { useTabs } from '@src/ts/tabs/Tabs';
import NewTabModule from '@src/modules/NewTabModule/NewTabModule';
import { newtabUri } from '@src/types/URIParts';
import TabModule from '@src/modules/TabModule/TabModule';
import SetListModule from '@src/modules/SetListModule/SetListModule';
import SidebarModule from '@src/modules/SidebarModule/SidebarModule';
import CustomEvents, { Events } from '@src/ts/CustomEvents';
import PresentWindow from '@src/ts/presenter/PresentWindow';
import Commands from '@src/ts/commands/Commands';
import ToastManager from '@src/modules/ToastModule/ToastManager';
import { useEffect } from 'react';
import CommandDialog from '@src/modules/CommandDialog/CommandDialog';

const ControlRoute = () => {
	const active = useTabs(state => state.active);

	const startShow = () => {
		new PresentWindow();
	};

	useEffect(() => {
		CustomEvents.listen(Events.START, startShow);
		Commands.init();

		return function () {
			CustomEvents.remove(Events.START, startShow);
			Commands.destroy();
		};
	}, []);

	return (
		<ToastManager.Container>
			<div className='Control'>
				<SidebarModule />
				<div className='main'>
					<HeaderModule />
					{active == newtabUri ? <NewTabModule /> : <TabModule id={active} />}
				</div>
				{/* <ContextMenu /> */}
			</div>
			<CommandDialog />
		</ToastManager.Container>
	);
};

export default ControlRoute;
