import { h } from 'preact';
import './AddGroup.scss';

import { useContext, useEffect } from 'preact/hooks';

import { StoreContext } from '../../ts/store';
import Link from '../../components/Link';

import main from '../../ts/window';
import Header from '../Header/Header';
import ContextMenu from '../../components/ContextMenu/ContextMenu';
import { GroupTypes } from '../../../types/IGroupData';
import Powerpoint from '../../components/icons/Powerpoint';
import GroupIcon from '../../components/icons/GroupIcon';

const AddGroup = () => {
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

	const groups: Array<{
		type: GroupTypes;
		name: string;
		button: string;
		function: () => void;
	}> = [
		{
			type: GroupTypes.SONGS,
			name: 'Sange',
			button: 'Find setlister',
			function: () => {},
		},
		{
			type: GroupTypes.POWERPOINT,
			name: 'Powerpoint',
			button: 'Find .pptx filer',
			function: () => {
				main
					.invoke('invoke:openfile', {
						type: 'pptx',
						name: 'Powerpoint',
					})
					.then(response => {
						console.log(response);
						if (!response) {
							console.log('no file selected');
						} else {
							dispatch({
								type: 'addGroup',
								value: response,
							});
						}
					});
			},
		},
		{
			type: GroupTypes.VIDEO,
			name: 'Video',
			button: 'Find video filer',
			function: () => {},
		},
	];

	return (
		<div class='AddGroup' key={`addGrp`}>
			<div class='title'>SERMON</div>
			<div class='groups'>
				{groups.map(group => (
					<div class='group' data-type={group.type} onClick={group.function}>
						<div class='logo'>
							<GroupIcon type={group.type} />
						</div>
						<div class='groupName'>{group.name}</div>
						<div class='button'>{group.button}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AddGroup;
