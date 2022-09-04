import { h } from 'preact';
import './SidebarModule.scss';

import { useEffect, useRef, useState } from 'preact/hooks';
import Plus from '@src/components/icons/Plus';

// import main from '../../ts/window';
import Tabs, { useTabs } from '@src/ts/tabs/Tabs';
import SearchInput from '@src/components/Input/SearchInput';
import OurPraise from '@src/ts/OurPraise';
import Settings from '@src/ts/Settings';
import Music from '@src/components/icons/Music';
import SidebarTab from '@src/components/SidebarTab/SidebarTab';
import Cog from '@src/components/icons/Cog';

const SidebarModule = () => {
	const sidebar = Settings.use(state => state.sidebar);
	const [size, setSize] = useState<number>(Settings.get().sidebarWidth);

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
		setSize(val => {
			let newVal = val + e.movementX;

			if (newVal < 100) newVal = 100;
			if (newVal > 800) newVal = 800;

			return newVal;
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
					<div class='resizer' onMouseDown={resizerDown} onMouseUp={resizerUp} onMouseMove={resizerMove}></div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default SidebarModule;
