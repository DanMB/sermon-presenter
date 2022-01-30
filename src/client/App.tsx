import { h, Fragment } from 'preact';

import { useReducer, useEffect } from 'preact/hooks';
import Control from './modules/Control/Control';

import Store, { Provider, IStoreType, DEFAULT_STATE } from './ts/store';

import main from './ts/window';

const App = () => {
	const [state, dispatch] = useReducer(Store.reducer, DEFAULT_STATE);
	const store = { state, dispatch } as IStoreType;

	useEffect(() => {
		main.send('app:ready', true);
	}, []);

	return <Provider value={store}>{DEFAULT_STATE.route === 'control' ? <Control /> : <></>}</Provider>;
};

export default App;
