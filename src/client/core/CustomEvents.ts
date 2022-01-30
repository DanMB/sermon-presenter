export enum Events {
	CONTEXTMENU = 'onContextMenu',
}

export default class CustomEvents {
	public static dispatch(name: Events, data?: any) {
		var ev = new CustomEvent(name, data ? { detail: data } : null);

		// if (data) {
		// 	console.log(name, data);
		// } else {
		// 	console.log(name);
		// }

		window.dispatchEvent(ev);
	}

	public static listen(name: Events, fnc: (e: CustomEvent) => void) {
		window.addEventListener(name, fnc as EventListenerOrEventListenerObject);
	}

	public static remove(name: Events, fnc: (e: CustomEvent) => void) {
		window.removeEventListener(name, fnc as EventListenerOrEventListenerObject);
	}

	public static once(name: Events, fnc: (e: CustomEvent) => void) {
		var newFnc = (e: CustomEvent) => {
			fnc(e);
			CustomEvents.remove(name, newFnc);
		};

		CustomEvents.listen(name, newFnc);
	}
}
