
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
			className={`HeaderTab ${id === active ? 'active' : ''} ${presentingIsOpen && id === presentingTab ? 'live' : ''}`}
			key={id}
			data-id={id}
			onClick={e => {
				const target = e.target as HTMLElement | null;
				if (target?.classList.contains('close')) return;
				Tabs.set({
					active: id,
				});
			}}
		>
			<span className='icon'>
				<GroupIcon />
			</span>
			<span className='name'>{title}</span>
			<span className='indicator'>
				<Live />
			</span>
			<span
				className='close'
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
