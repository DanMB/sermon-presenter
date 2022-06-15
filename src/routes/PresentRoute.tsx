import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import Storage from '@src/ts/Storage';

const PresentRoute = () => {
	const presenting = Storage.use('presenting');

	useEffect(() => {
		const onInit = async () => {
			if (Neutralino) {
				await Neutralino.window.move(-500, -500);
				await Neutralino.window.maximize();
				await Neutralino.window.show();
			}
		};

		const onWindowClose = () => {
			if (!Neutralino) return;
			// Stop presenting state
			Neutralino.app.broadcast('setPresenting', null);
		};

		const onWindowFocus = () => {
			if (!Neutralino) return;
			// Focus control window
			Neutralino.app.broadcast('setFocus', 'control');
		};

		onInit();

		return function () {
			if (Neutralino) {
				Neutralino.events.off('windowClose', onWindowClose);
				Neutralino.events.off('windowFocus', onWindowFocus);
			}
		};
	}, []);

	return <></>;
};

export default PresentRoute;
