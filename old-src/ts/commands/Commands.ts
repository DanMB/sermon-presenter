import { AllCommands, ICommand } from './AllCommands';
import Mousetrap from 'mousetrap';
import CustomEvents, { Events } from '../CustomEvents';

const globalTest = /ctrl|f\d/;

export default class Commands {
	public static init() {
		Mousetrap.reset();

		for (const command of AllCommands) {
			if (command.keybind) {
				// if(Array.isArray(command.keybind) && command.keybind.some(k => globalTest.test(k))) {
				// 	for (const keybind of command.keybind) {
				// 		Mousetrap.global(keybind, command.call, command.keybindAction);
				// 	}
				// } else if(!Array.isArray(command.keybind) && globalTest.test(command.keybind)) {
				// 	Mousetrap.global(command.keybind, command.call, command.keybindAction);
				// }
				Mousetrap.bind(command.keybind, command.call, command.keybindAction);
			}
		}
		Mousetrap.bind('meta+p', this.openCommandCenter);
	}

	public static getAll() {
		const array = [...AllCommands];
		array.sort((a, b) => a.name.localeCompare(b.name));
		return array;
	}

	public static view() {
		CustomEvents.dispatch(Events.COMMANDS);
	}

	private static keymap: { [key: string]: string } = {
		meta: '⌘',
		shift: '⇧',
		enter: '↵',
		tab: '⇥',
		ctrl: 'ctrl',
		esc: '␛',
		alt: '⌥',
		right: '→',
		left: '←',
		up: '↑',
		down: '↓',
	};

	public static keycode(key: string): string {
		const code = this.keymap[key];
		if (code) return code;
		return key.toUpperCase();
	}

	public static getKeybinds(command: ICommand): string[] {
		if (!command.keybind) return [];

		if (Array.isArray(command.keybind)) {
			return command.keybind;
		} else {
			return [command.keybind];
		}
	}

	public static destroy() {
		Mousetrap.reset();
	}

	public static openCommandCenter() {}
}
