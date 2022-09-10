import { h } from 'preact';
import './SidebarModule.scss';

import { useEffect, useRef } from 'preact/hooks';
import Settings from '@src/ts/Settings';
import Music from '@src/components/icons/Music';
import SidebarTab from '@src/components/SidebarTab/SidebarTab';
import Cog from '@src/components/icons/Cog';
import SettingsModule from '../SettingsModule/SettingsModule';
import AddMusicModule from '../AddMusicModule/AddMusicModule';

const SidebarModule = () => {
	const sidebar = Settings.use(state => state.sidebar);
	const size = Settings.use(state => state.sidebarWidth);

	const pos = useRef(0);
	const holding = useRef(false);

	const resizerDown = () => {
		holding.current = true;
	};

	const resizerUp = () => {
		holding.current = false;
		pos.current = 0;
	};

	const resizerMove = (e: MouseEvent) => {
		if (!holding.current) return;

		let newVal = Settings.get().sidebarWidth + e.movementX;

		if (newVal < 100) newVal = 100;
		if (newVal > 800) newVal = 800;

		Settings.set({
			sidebarWidth: newVal,
		});
	};

	useEffect(() => {
		document.addEventListener('mouseup', resizerUp);
		document.addEventListener('mousemove', resizerMove, false);

		return function () {
			document.removeEventListener('mouseup', resizerUp);
			document.removeEventListener('mousemove', resizerMove, false);
			Settings.set({ sidebarWidth: size });
		};
	}, []);

	return (
		<div class='Sidebar'>
			<div class='tabs'>
				<SidebarTab id={'music'} icon={<Music />} />
				<SidebarTab id={'settings'} icon={<Cog />} />
			</div>
			{sidebar ? (
				<div class='content' style={{ width: `${size}px` }}>
					{sidebar === 'settings' ? <SettingsModule /> : sidebar === 'music' ? <AddMusicModule /> : <></>}
					<div class='resizer' onMouseDown={resizerDown} onMouseUp={resizerUp} onMouseMove={resizerMove}></div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default SidebarModule;
