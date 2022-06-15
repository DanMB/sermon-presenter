import { h, render } from 'preact';
import CustomURI from '@src/types/CustomURI';
import { newtabUri, TabType, UriParts } from '@src/types/URIParts';
import ControlRoute from '@src/routes/ControlRoute';
import PresentRoute from '@src/routes/PresentRoute';
import '@src/style/global.scss';
import { useState, useEffect } from 'preact/hooks';
import Window from './ts/Window';
import PWA from './modules/PWA/PWA';

const App = () => {
	const [Route, setRoute] = useState<h.JSX.Element>(<></>);

	useEffect(() => {
		const ready = () => {
			if (Neutralino) {
				Neutralino.init();
				const args = Window.getArgs();
				if (args.get('route') === 'present') {
					setRoute(<PresentRoute />);
				} else {
					setRoute(<ControlRoute />);
				}
			}
		};

		// @ts-ignore
		if (!window.REF_PORT) {
			const params = new URLSearchParams(window.location.search);
			if (params.get('route') === 'present') {
				setRoute(<PresentRoute />);
			} else {
				setRoute(<ControlRoute />);
			}
			// @ts-ignore
		} else if (window.NEU_LOADED) {
			ready();
		} else {
			window.addEventListener('onNeuLoaded', ready);
		}

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
