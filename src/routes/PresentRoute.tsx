import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Storage from '@src/ts/Storage';
import CustomURI from '@src/types/CustomURI';
import { Events } from '@src/ts/PresentWindow';
import Client from '@src/ts/Client';

const PresentRoute = () => {
	const [presenting, setPresenting] = useState<CustomURI | null>(null);
	const style = Storage.use(Events.STYLE);

	useEffect(() => {
		const onWindowClose = () => {
			console.log('onWindowClose');
			if (!Neutralino) return;
			// Stop presenting state
			// Neutralino.app.broadcast('setPresenting', null);
		};

		const onWindowFocus = () => {
			console.log('onWindowFocus');
			if (!Neutralino) return;
			// Focus control window
			Neutralino.events.broadcast('setFocus', 'control');
		};

		const onStopPresenting = () => {
			Neutralino.app.exit();
		};

		const onInit = async () => {
			if (Neutralino) {
				const controlPort = Client.getArgs().get('control-port');

				if (controlPort) {
					Client.connect(controlPort);
					Client.listen(Events.STOP, onStopPresenting);
					// const ws = new WebSocket(`ws:localhost:${controlPort}`);
					// ws.addEventListener('message', event => {
					// 	const data = JSON.parse(event.data);
					// 	if (data?.event === Events.STOP) {
					// 		Neutralino.app.exit();
					// 	}
					// });
				}

				Neutralino.events.on('windowClose', onWindowClose);
				Neutralino.events.on('windowFocus', onWindowFocus);

				await Neutralino.window.move(-500, -500);
				await Neutralino.window.maximize();
				await Neutralino.window.show();
			}
		};

		onInit();

		return function () {
			if (Neutralino) {
				Client.remove(Events.STOP, onStopPresenting);
				Neutralino.events.off('windowClose', onWindowClose);
				Neutralino.events.off('windowFocus', onWindowFocus);
			}
		};
	}, []);

	if (presenting === null) return <></>;

	return <></>;
};

export default PresentRoute;
