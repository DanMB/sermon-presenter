import ToastManager from '@src/modules/ToastModule/ToastManager';
import Tabs from '@src/ts/tabs/Tabs';
import CustomEvents, { Events } from '../CustomEvents';
import PresentWindow from '../presenter/PresentWindow';
import Sidebar from '../Sidebar';
import Commands from './Commands';

export interface ICommand {
	name: string;
	call: (e?: Mousetrap.ExtendedKeyboardEvent, combo?: string) => void;
	keybind?: string | string[];
	keybindAction?: string;
	hidden?: boolean;
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
	{
		name: 'Slide #1',
		call: () => PresentWindow.gotoIndex(0),
		keybind: '1',
		hidden: true,
	},
	{
		name: 'Slide #2',
		call: () => PresentWindow.gotoIndex(1),
		keybind: '2',
		hidden: true,
	},
	{
		name: 'Slide #3',
		call: () => PresentWindow.gotoIndex(2),
		keybind: '3',
		hidden: true,
	},
	{
		name: 'Slide #4',
		call: () => PresentWindow.gotoIndex(3),
		keybind: '4',
		hidden: true,
	},
	{
		name: 'Slide #5',
		call: () => PresentWindow.gotoIndex(4),
		keybind: '5',
		hidden: true,
	},
	{
		name: 'Slide #6',
		call: () => PresentWindow.gotoIndex(5),
		keybind: '6',
		hidden: true,
	},
	{
		name: 'Slide #7',
		call: () => PresentWindow.gotoIndex(6),
		keybind: '7',
		hidden: true,
	},
	{
		name: 'Slide #8',
		call: () => PresentWindow.gotoIndex(7),
		keybind: '8',
		hidden: true,
	},
	{
		name: 'Slide #9',
		call: () => PresentWindow.gotoIndex(8),
		keybind: '9',
		hidden: true,
	},
	{
		name: 'Slide #10',
		call: () => PresentWindow.gotoIndex(9),
		keybind: '0',
		hidden: true,
	},
	{
		name: 'Slide #11',
		call: () => PresentWindow.gotoIndex(10),
		keybind: 'shift+1',
		hidden: true,
	},
	{
		name: 'Slide #12',
		call: () => PresentWindow.gotoIndex(11),
		keybind: 'shift+2',
		hidden: true,
	},
	{
		name: 'Slide #13',
		call: () => PresentWindow.gotoIndex(12),
		keybind: 'shift+3',
		hidden: true,
	},
	{
		name: 'Slide #14',
		call: () => PresentWindow.gotoIndex(13),
		keybind: 'shift+4',
		hidden: true,
	},
	{
		name: 'Slide #15',
		call: () => PresentWindow.gotoIndex(14),
		keybind: 'shift+5',
		hidden: true,
	},
	{
		name: 'Slide #16',
		call: () => PresentWindow.gotoIndex(15),
		keybind: 'shift+6',
		hidden: true,
	},
	{
		name: 'Slide #17',
		call: () => PresentWindow.gotoIndex(16),
		keybind: 'shift+7',
		hidden: true,
	},
	{
		name: 'Slide #18',
		call: () => PresentWindow.gotoIndex(17),
		keybind: 'shift+8',
		hidden: true,
	},
	{
		name: 'Slide #19',
		call: () => PresentWindow.gotoIndex(18),
		keybind: 'shift+9',
		hidden: true,
	},
	{
		name: 'Slide #20',
		call: () => PresentWindow.gotoIndex(19),
		keybind: 'shift+0',
		hidden: true,
	},
	{
		name: 'Toggle command menu',
		call: () => CustomEvents.dispatch(Events.COMMANDS),
		keybind: 'shift+k',
	},
	{
		name: 'Test toast',
		call: ToastManager.test,
		keybind: 'f',
	},
];
