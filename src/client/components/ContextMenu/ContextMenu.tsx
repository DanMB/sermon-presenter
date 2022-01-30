import { h } from 'preact';
import './ContextMenu.scss';

import { StateUpdater, useRef, useEffect, useState } from 'preact/hooks';
import CustomEvents, { Events } from '../../core/CustomEvents';
import { MenuPoint } from './MenuTools';
import main from '../../ts/window';

interface MenuState {
	x: number;
	y: number;
	points: Array<MenuPoint>;
}

const ContextMenu = () => {
	const [menu, setMenu] = useState(null) as [MenuState, StateUpdater<MenuState>];
	const menuRef = useRef<HTMLDivElement>();

	useEffect(() => {
		const handleSetMenu = (e: CustomEvent) => {
			let data: MenuState = e.detail;
			if (!data || data.points.length <= 0) setMenu(null);
			setMenu(data);
		};

		const handleSiteClick = (e: MouseEvent) => {
			if (!menuRef.current || menuRef.current.contains(e.target as Node)) return;
			if (!menuRef.current.getAttribute('data-open')) return;
			setMenu(null);
		};

		const windowBlur = () => {
			if (!menuRef.current.getAttribute('data-open')) return;
			setMenu(null);
		};

		CustomEvents.listen(Events.CONTEXTMENU, handleSetMenu);
		document.addEventListener('click', handleSiteClick);

		main.on('window:blur', windowBlur);

		return function () {
			CustomEvents.remove(Events.CONTEXTMENU, handleSetMenu);
			document.removeEventListener('click', handleSiteClick);
			main.off('window:blur', windowBlur);
		};
	}, []);

	useEffect(() => {
		if (menu !== null) {
			menuRef.current.setAttribute('data-open', 'true');
			// let first = menuRef.current.children[0] as HTMLElement;
			// if (first) first.focus();
		} else {
			menuRef.current.removeAttribute('data-open');
		}

		return function () {};
	}, [menu]);

	return (
		<div
			class='ContextMenu'
			ref={menuRef}
			style={{
				display: menu === null ? 'none' : 'flex',
				top: menu === null ? '0px' : menu.y + 'px',
				left: menu === null ? '0px' : menu.x + 'px',
			}}
		>
			{menu === null ? (
				<></>
			) : (
				menu.points.map(point => (
					<div
						class={`point ${point.break ? 'break' : ''} ${point.disabled ? 'disabled' : ''}`}
						tabIndex={0}
						onClick={() => {
							if (point.disabled) return;
							point.function();
							setMenu(null);
						}}
					>
						<span class='icon'>{point.icon ? <point.icon /> : <></>}</span>
						<span class='text'>{point.text}</span>
					</div>
				))
			)}
		</div>
	);
};

export default ContextMenu;
