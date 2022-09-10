import { h } from 'preact';
import './HeaderTab.scss';
import Live from '@src/components/icons/Live';
import GroupIcon from '@src/components/icons/GroupIcon';
import Tabs, { useTabs } from '@src/ts/tabs/Tabs';
import Close from '../icons/Close';
import { currentTab, isOpen } from '@src/ts/presenter/hooks';
import Tab from '@src/ts/tabs/Tab';

const HeaderTab = ({ tab }: { tab: Tab }) => {
	const active = useTabs(state => state.active);

	const presentingTab = currentTab.use();
	const presentingIsOpen = isOpen.use();

	const id = tab.use(state => state.id);
	const title = tab.use(state => state.title);

	return (
		<div
			class={`HeaderTab ${id === active ? 'active' : ''} ${presentingIsOpen && id === presentingTab ? 'live' : ''}`}
			key={id}
			data-id={id}
			onClick={() => {
				Tabs.set({
					active: id,
				});
			}}
		>
			<span class='icon'>
				<GroupIcon />
			</span>
			<span class='name'>{title}</span>
			<span class='indicator'>
				<Live />
			</span>
			<span
				class='close'
				onClick={() => {
					Tabs.remove(id);
				}}
			>
				<Close />
			</span>
		</div>
	);
};

export default HeaderTab;
