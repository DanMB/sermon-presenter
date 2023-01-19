import Tabs from '@src/ts/tabs/Tabs';
import PresentWindow from '../presenter/PresentWindow';
import Sidebar from '../Sidebar';

export interface ICommand {
	name: string;
	call: (e?: Mousetrap.ExtendedKeyboardEvent, combo?: string) => void;
	keybind?: string | string[];
	keybindAction?: string;
}

export const AllCommands: ICommand[] = [
	{
		name: 'Next tab',
		call: Tabs.next,
		keybind: 'ctrl+tab',
	},
	{
		name: 'Previous tab',
		call: Tabs.prev,
		keybind: 'ctrl+shift+tab',
	},
	{
		name: 'Next slide',
		call: PresentWindow.next,
		keybind: 'right',
	},
	{
		name: 'Previous slide',
		call: PresentWindow.prev,
		keybind: 'left',
	},
	{
		name: 'Next slide group',
		call: PresentWindow.nextGroup,
		keybind: 'shift+right',
	},
	{
		name: 'Previous slide group',
		call: PresentWindow.prevGroup,
		keybind: 'shift+left',
	},
	{
		name: 'Toggle cleared content',
		call: PresentWindow.clear,
		keybind: 'esc',
	},
	{
		name: 'Toggle blackout',
		call: PresentWindow.blackout,
		keybind: 'shift+esc',
	},
	{
		name: 'Hide sidemenu',
		call: Sidebar.close,
		keybind: 'meta+b',
	},
	{
		name: 'Start presentation',
		call: PresentWindow.start,
		keybind: 'f2',
	},
	{
		name: 'Stop presentation',
		call: PresentWindow.stop,
	},
	{
		name: 'Search songs',
		call: Sidebar.openMusic,
		keybind: 'meta+l',
	},
	{
		name: 'Settings',
		call: Sidebar.openSettings,
		keybind: 'meta+,',
	},
];
