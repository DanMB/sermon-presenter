import { h } from 'preact';
import './SidebarTab.scss';
import Sidebar from '@src/ts/Sidebar';

const SidebarTab = ({ id, icon }: { id: string; icon: h.JSX.Element }) => {
	const sidebar = Sidebar.use(state => state.sidebar);

	return (
		<div
			class={`SidebarTab ${id === sidebar ? 'active' : ''}`}
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
