import { h } from 'preact';
import './Tab.scss';

import { useContext, useEffect } from 'preact/hooks';
import Plus from '../../components/icons/Plus';
import Powerpoint from '../../components/icons/Powerpoint';
import Keynote from '../../components/icons/Keynote';
import Video from '../../components/icons/Video';
import Music from '../../components/icons/Music';
import Trash from '../../components/icons/Trash';
import Arrow from '../../components/icons/Arrow';
import Live from '../../components/icons/Live';

import { StoreContext } from '../../ts/store';
import MenuTools from '../../components/ContextMenu/MenuTools';
import IGroupData, { GroupTypes } from '../../../types/IGroupData';
import GroupIcon from '../../components/icons/GroupIcon';

const Tab = ({ group }: { group: IGroupData }) => {
	const { state, dispatch } = useContext(StoreContext);

	const clickTab = (e: MouseEvent) => {
		if ((e.target as HTMLElement).classList.contains('menu')) return;
		dispatch({
			type: 'viewGroup',
			value: (e.currentTarget as HTMLElement).getAttribute('data-id'),
		});
	};

	useEffect(() => {
		return function () {};
	}, []);

	return (
		<div
			class={`Tab ${group.id === state.viewingGroup ? 'active' : ''} ${
				state.activeSlide && state.activeSlide?.group?.id === group.id ? 'live' : ''
			}`}
			key={group.id}
			data-type={group.type}
			data-id={group.id}
			onClick={clickTab}
		>
			<span class='icon'>
				<GroupIcon type={group.type} />
			</span>
			<span class='name'>{group.name}</span>
			<span
				class='menu'
				onClick={click => {
					MenuTools.setMenu(click, [
						{
							text: 'Slet fra præsentation',
							icon: Trash,
							function: () => {
								dispatch({
									type: 'removeGroup',
									value: group.id,
								});
							},
						},
						{
							text: 'Åben i stifinder',
							disabled: true,
							function: () => {
								console.log('open');
							},
						},
					]);
				}}
			>
				<Arrow />
			</span>
			<span class='indicator'>
				<Live />
			</span>
		</div>
	);
};

export default Tab;
