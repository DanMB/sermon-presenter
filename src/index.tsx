import { h, render } from 'preact';
import ControlRoute from '@src/routes/ControlRoute';
import PresentRoute from '@src/routes/PresentRoute';
import '@src/style/global.scss';
import { useState, useEffect } from 'preact/hooks';
import Client from './ts/Client';
import PWA from './modules/PWA/PWA';
import Cache from './ts/Cache';

const App = () => {
	const [Route, setRoute] = useState<h.JSX.Element>(<></>);

	useEffect(() => {
		const ready = () => {
			Cache.clean();
			if (Client.getLabel() === 'present') {
				setRoute(<PresentRoute />);
			} else {
				setRoute(<ControlRoute />);
			}
		};

		const failed = () => {
			console.error('Failed to initialize Tauri client');
			ready();
		};

		Client.init().then(ready).catch(failed);

		return function () {
			Client.destroy();
		};
	}, []);

	return (
		<>
			{Route}
			<PWA />
		</>
	);
};

// @ts-ignore
render(<App />, document.getElementById('wrapper'));
