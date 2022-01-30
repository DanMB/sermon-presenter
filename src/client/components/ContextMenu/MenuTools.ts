import { h } from 'preact';
import CustomEvents, { Events } from '../../core/CustomEvents';

export interface MenuPoint {
	icon?: () => h.JSX.Element;
	iconColor?: string;
	text: string;
	function?: () => void;
	disabled?: boolean;
	break?: boolean;
}

export default {
	setMenu: (click: MouseEvent, points: Array<MenuPoint>) => {
		for (let i = 0; i < points.length; i++) {
			points[i] = {
				function: () => {},
				disabled: false,
				break: false,
				...points[i],
			};
		}
		CustomEvents.dispatch(Events.CONTEXTMENU, {
			x: click.clientX,
			y: click.clientY,
			points,
		});
	},
};
