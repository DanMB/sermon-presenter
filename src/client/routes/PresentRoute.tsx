import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import Storage from '@client/ts/Storage';

const PresentRoute = () => {
	const presenting = Storage.use('presenting');

	useEffect(() => {
		const onInit = async () => {
			if (Neutralino) {
				await Neutralino.window.move(-500, -500);
				await Neutralino.window.maximize();
				await Neutralino.window.show();
			} else {
			}
		};

		const onWindowClose = () => {
			// Stop presenting state
		};

		const onWindowFocus = () => {
			// Focus control state
		};

		if (Neutralino) {
			Neutralino.init();
			Neutralino.events.on('windowClose', onWindowClose);
			Neutralino.events.on('windowFocus', onWindowFocus);

			onInit();
		}

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
