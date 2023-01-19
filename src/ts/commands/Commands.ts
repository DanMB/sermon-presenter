import { AllCommands } from './AllCommands';
import Mousetrap from 'mousetrap';

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
				console.log('bind', command.keybind, command.name);
				Mousetrap.bind(command.keybind, command.call, command.keybindAction);
			}
		}
		Mousetrap.bind('meta+p', this.openCommandCenter);
	}

	public static destroy() {
		Mousetrap.reset();
	}

	public static openCommandCenter() {}
}
