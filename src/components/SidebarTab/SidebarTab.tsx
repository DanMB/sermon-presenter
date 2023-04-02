import './SidebarTab.scss';
import Sidebar from '@src/ts/Sidebar';
import { ReactNode } from 'react';

const SidebarTab = ({ id, icon }: { id: string; icon: ReactNode }) => {
	const sidebar = Sidebar.use(state => state.sidebar);

	return (
		<div
			className={`SidebarTab ${id === sidebar ? 'active' : ''}`}
			key={id}
			data-id={id}
			onClick={() => {
				Sidebar.set({
					sidebar: id === sidebar ? null : id,
				});
			}}
		>
			{icon}
		</div>
	);
};

export default SidebarTab;
