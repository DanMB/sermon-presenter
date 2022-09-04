import { h } from 'preact';
import './SidebarTab.scss';
import Settings from '@src/ts/Settings';

const SidebarTab = ({ id, icon }: { id: string; icon: h.JSX.Element }) => {
	const sidebar = Settings.use(state => state.sidebar);

	return (
		<div
			class={`SidebarTab ${id === sidebar ? 'active' : ''}`}
			key={id}
			data-id={id}
			onClick={() => {
				Settings.set({
					sidebar: id === sidebar ? null : id,
				});
			}}
		>
			{icon}
		</div>
	);
};

export default SidebarTab;
