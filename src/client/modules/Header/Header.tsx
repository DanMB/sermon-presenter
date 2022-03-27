import { h } from 'preact';
import './Header.scss';

import { useContext, useEffect, useState } from 'preact/hooks';
import Plus from '../../components/icons/Plus';
import Powerpoint from '../../components/icons/Powerpoint';
import Keynote from '../../components/icons/Keynote';
import Video from '../../components/icons/Video';
import Music from '../../components/icons/Music';
import Trash from '../../components/icons/Trash';
import Arrow from '../../components/icons/Arrow';
import Live from '../../components/icons/Live';

import { StoreContext } from '../../ts/store';
import main from '../../ts/window';
import MenuTools from '../../components/ContextMenu/MenuTools';
import IGroupData, { GroupTypes } from '../../../types/IGroupData';
import ISlideData from '../../../types/ISlideData';
import Tab from '../Tab/Tab';
import Minimize from '../../components/icons/Minimize';
import Maximize from '../../components/icons/Maximize';
import Close from '../../components/icons/Close';

const digitExp = /^Digit\d+$/i;

const Header = () => {
	const { state, dispatch } = useContext(StoreContext);
	const [isFocused, setIsFocus] = useState(true);

	const keyDown = (e: KeyboardEvent) => {
		if (!e.ctrlKey) return;
		if (e.key === 'Tab') {
			let current = state.groups.findIndex(g => g.id === state.viewingGroup);
			if (e.shiftKey) {
				current--;
				if (current < 0) current = state.groups.length;
			} else {
				current++;
				if (current > state.groups.length) current = 0;
			}
			let group = state.groups[current];
			if (!group) return;
			dispatch({
				type: 'viewGroup',
				value: group.id,
			});
		} else if (digitExp.test(e.code)) {
			let tab = parseInt(e.key) - 1;
			if (tab === -1) tab = 9;
			let group = state.groups[tab];
			if (!group) return;
			dispatch({
				type: 'viewGroup',
				value: group.id,
			});
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', keyDown);

		for (let i = 0; i < state.groups.length; i++) {
			var group = state.groups[i];
			main
				.invoke('invoke:getData', {
					file: group.file,
				})
				.then(response => {
					if (!response) {
						dispatch({
							type: 'removeGroup',
							value: group.id,
						});
					} else {
						dispatch({
							type: 'addGroup',
							value: response,
						});
					}
				});
		}

		const windowFocus = () => {};

		const windowBlur = () => {};

		main.on('window:focus', windowFocus);
		main.on('window:blur', windowBlur);

		return function () {
			document.removeEventListener('keydown', keyDown);
			main.off('window:focus', windowFocus);
			main.off('window:blur', windowBlur);
		};
	}, []);

	return (
		<div class='Header'>
			<div class={`background ${isFocused ? 'focused' : ''}`}></div>
			<div class='nav'>
				<div class='tabs'>
					{state.groups.map(group => (
						<Tab group={group} />
					))}
				</div>
				<div
					class={`add ${'add' === state.viewingGroup ? 'active' : ''}`}
					onClick={click => {
						dispatch({
							type: 'viewGroup',
							value: 'add',
						});
						// MenuTools.setMenu(click, [
						// 	{
						// 		text: 'Powerpoint',
						// 		icon: Powerpoint,
						// 		function: () => {
						// 			main
						// 				.invoke('invoke:openfile', {
						// 					type: 'pptx',
						// 					name: 'Powerpoint',
						// 				})
						// 				.then(response => {
						// 					console.log(response);
						// 					if (!response) {
						// 						console.log('no file selected');
						// 					} else {
						// 						dispatch({
						// 							type: 'addGroup',
						// 							value: response,
						// 						});
						// 					}
						// 				});
						// 		},
						// 	},
						// 	{
						// 		text: 'Keynote',
						// 		icon: Keynote,
						// 		disabled: true,
						// 		function: () => {
						// 			console.log('.key');
						// 		},
						// 	},
						// 	{
						// 		text: 'Songpilot',
						// 		icon: Music,
						// 		disabled: true,
						// 		function: () => {
						// 			console.log('.set');
						// 		},
						// 	},
						// 	{
						// 		text: 'Video',
						// 		icon: Video,
						// 		disabled: true,
						// 		function: () => {
						// 			console.log('cd');
						// 		},
						// 	},
						// ]);
					}}
				>
					<Plus />
				</div>
			</div>
			<div class='present'>
				<span>Presenter</span>
			</div>
			<div class='controls'>
				<div
					class='control'
					onClick={() => {
						main.send('window:minimize');
					}}
				>
					<Minimize />
				</div>
				<div
					class='control'
					onClick={() => {
						main.send('window:toggle');
					}}
				>
					<Maximize />
				</div>
				<div
					class='control'
					onClick={() => {
						main.send('window:close');
					}}
				>
					<Close />
				</div>
			</div>
		</div>
	);
};

export default Header;
