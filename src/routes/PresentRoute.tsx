import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Storage from '@src/ts/Storage';
import CustomURI from '@src/types/CustomURI';
import { Events } from '@src/ts/ChildWindow';
import Client from '@src/ts/Client';
import PresentingContent from '@src/components/PresentingContent/PresentingContent';

const PresentRoute = () => {
	const [presenting, setPresenting] = useState<{
		uri: CustomURI | null;
		data: any | null;
	}>({
		uri: null,
		data: null,
	});
	// const style = Storage.use(Events.STYLE);

	useEffect(() => {
		const show = async () => {
			await Neutralino.window.move(-500, -500);
			await Neutralino.window.maximize();
			await Neutralino.window.show();
		};

		const onWindowClose = () => {
			// console.log('onWindowClose');
			// Stop presenting state
			// Neutralino.app.broadcast('setPresenting', null);
		};

		const onWindowFocus = () => {
			// Focus control window
			Client.broadcast('setFocus', 'control');
		};

		const onSetPresenting = (e: CustomEvent<any>) => {
			setPresenting(e.detail);
		};

		Client.on('windowClose', onWindowClose);
		Client.on('windowFocus', onWindowFocus);

		if (Client.isNeu) {
			setTimeout(() => {
				show();
			}, 1000);
		} else {
			const docElm = document.documentElement;

			docElm.addEventListener('click', () => {
				window.moveTo(-500, -500);
				docElm.requestFullscreen();
			});
		}

		return function () {
			// Client.remove(Events.STOP, onStopPresenting);
			// Client.remove(Events.SET, onSetPresenting);
			Client.off('windowClose', onWindowClose);
			Client.off('windowFocus', onWindowFocus);
		};
	}, []);

	if (!presenting.data?.text) return <div class='Present'></div>;

	return <PresentingContent data={presenting.data} />;
};

export default PresentRoute;
