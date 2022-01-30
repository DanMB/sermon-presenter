import { h } from 'preact';

import { useContext, useEffect } from 'preact/hooks';

import { StoreContext } from '../../ts/store';
import Link from '../../components/Link';

import main from '../../ts/window';
import Header from '../Header/Header';
import ContextMenu from '../../components/ContextMenu/ContextMenu';
import { GroupTypes } from '../../../types/IGroupData';
import PowerpointGroup from '../PowerpointGroup/PowerpointGroup';
import AddGroup from '../AddGroup/AddGroup';
import SongsGroup from '../SongsGroup/SongsGroup';
import VideoGroup from '../VideoGroup/VideoGroup';

const Control = () => {
	const { state, dispatch } = useContext(StoreContext);

	const toggleSettings = () => {
		// dispatch({
		// 	type: 'openSettings',
		// 	value: !state.settingsOpen,
		// });
	};

	useEffect(() => {
		return function () {};
	}, []);

	const group = state.groups.find(g => g.id === state.viewingGroup);

	return (
		<div class='page'>
			<Header />
			{group ? (
				group.type === GroupTypes.POWERPOINT ? (
					<PowerpointGroup
						data={group}
						isActive={state.activeSlide ? state.activeSlide?.group?.id === group.id : false}
					/>
				) : group.type === GroupTypes.SONGS ? (
					<SongsGroup data={group} isActive={state.activeSlide ? state.activeSlide?.group?.id === group.id : false} />
				) : group.type === GroupTypes.VIDEO ? (
					<VideoGroup data={group} isActive={state.activeSlide ? state.activeSlide?.group?.id === group.id : false} />
				) : (
					<></>
				)
			) : state.viewingGroup === 'add' ? (
				<AddGroup />
			) : (
				<></>
			)}
			<ContextMenu />
		</div>
	);
};

export default Control;
