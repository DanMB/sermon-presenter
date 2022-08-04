import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Storage from '@src/ts/Storage';
import CustomURI from '@src/types/CustomURI';
import { Events } from '@src/ts/ChildWindow';
import Client from '@src/ts/Client';
import PresentingContent from '@src/components/PresentingContent/PresentingContent';

const show = async () => {
	await Neutralino.window.move(-500, -500);
	await Neutralino.window.maximize();
	await Neutralino.window.show();
};

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
		const onWindowClose = () => {
			// console.log('onWindowClose');
			// Stop presenting state
			// Neutralino.app.broadcast('setPresenting', null);
		};

		const onWindowFocus = () => {
			// Focus control window
			Neutralino.events.broadcast('setFocus', 'control');
		};

		const onSetPresenting = (e: CustomEvent<any>) => {
			setPresenting(e.detail);
		};

		Neutralino.events.on('windowClose', onWindowClose);
		Neutralino.events.on('windowFocus', onWindowFocus);

		setTimeout(() => {
			show();
		}, 1000);

		return function () {
			// Client.remove(Events.STOP, onStopPresenting);
			// Client.remove(Events.SET, onSetPresenting);
			Neutralino.events.off('windowClose', onWindowClose);
			Neutralino.events.off('windowFocus', onWindowFocus);
		};
	}, []);

	if (!presenting.data?.text) return <div class='Present'></div>;

	return <PresentingContent data={presenting.data} />;
};

export default PresentRoute;
