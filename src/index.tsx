import ControlRoute from '@src/routes/ControlRoute';
import PresentRoute from '@src/routes/PresentRoute';
import '@src/style/global.scss';
import Client from './ts/Client';
import PWA from './modules/PWA/PWA';
import Cache from './ts/Cache';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';

const App = () => {
	const [Route, setRoute] = useState<JSX.Element>(<></>);

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

const element = document.getElementById('wrapper');
if (element) {
	const root = ReactDOM.createRoot(element);
	root.render(<App />);
}
