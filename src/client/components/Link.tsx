import { h } from 'preact';

import { useContext } from 'preact/hooks';
import { routesNames } from '../ts/routes';
import { StoreContext } from '../ts/store';

export interface LinkProps extends h.JSX.HTMLAttributes<HTMLSpanElement> {
	route: string;
}

const Link = ({ route, className, children }: LinkProps) => {
	const { state, dispatch } = useContext(StoreContext);

	const click = () => {
		if (!routesNames.includes(route)) return;
		dispatch({
			type: 'changeRoute',
			value: route,
		});
		if (state.settingsOpen) {
			dispatch({
				type: 'openSettings',
				value: false,
			});
		}
	};

	const keyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') click();
	};

	return (
		<span
			data-component='Link'
			data-route={route}
			class={className}
			aria-current={state.route === route ? 'page' : null}
			onClick={click}
			onKeyDown={keyDown}
			tabIndex={0}
		>
			{children}
		</span>
	);
};

export default Link;
