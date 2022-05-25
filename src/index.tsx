import { h, render } from 'preact';
import CustomURI from '@src/types/CustomURI';
import { newtabUri, TabType, UriParts } from '@src/types/URIParts';
import ControlRoute from '@src/routes/ControlRoute';
import PresentRoute from '@src/routes/PresentRoute';
import '@src/style/global.scss';

let App: () => h.JSX.Element = ControlRoute;

try {
	const urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('uri')) {
		const uri = new CustomURI(urlParams.get('uri') ?? newtabUri);

		if (uri.parts[UriParts.TYPE] === TabType.PRESENT) {
			App = PresentRoute;
		}
	}
} catch (e) {
	console.error(e);
}

// @ts-ignore
render(<App />, document.getElementById('wrapper'));
