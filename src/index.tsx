import { h, render } from 'preact';
import CustomURI from '@src/types/CustomURI';
import { newtabUri, TabType, UriParts } from '@src/types/URIParts';
import ControlRoute from '@src/routes/ControlRoute';
import PresentRoute from '@src/routes/PresentRoute';
import '@src/style/global.scss';
import { useState, useEffect } from 'preact/hooks';
import Client from './ts/Client';
import PWA from './modules/PWA/PWA';

const App = () => {
	const [Route, setRoute] = useState<h.JSX.Element>(<></>);

	useEffect(() => {
		const ready = () => {
			const args = Client.getArgs();
			if (args.get('route') === 'present') {
				setRoute(<PresentRoute />);
			} else {
				setRoute(<ControlRoute />);
			}
		};

		const failed = () => {
			console.error('Failed to initialize Neutralino');
			ready();
		};

		Client.init().then(ready).catch(failed);

		return function () {};
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
