import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Storage from '@src/ts/Storage';
import Client from '@src/ts/Client';
import PresentingContent from '@src/components/PresentingContent/PresentingContent';
import { appWindow, WebviewWindow } from '@tauri-apps/api/window';
import { Event, UnlistenFn } from '@tauri-apps/api/event';
import ISongSlide from '@src/types/ISongSlide';
import { EventNames } from '@src/types/EventNames';
import { DefaultSettings, ISettingsState } from '@src/ts/Settings';

const PresentRoute = () => {
	const [presenting, setPresenting] = useState<string | null>(null);
	const [style, setStyle] = useState<ISettingsState>(DefaultSettings);
	const [cleared, setCleared] = useState<boolean>(true);
	const [blackedout, setBlackedout] = useState<boolean>(true);
	// const style = Storage.use(Events.STYLE);

	useEffect(() => {
		const onSetPresenting = (e: Event<string>) => {
			const data: string | null = Client.isTau ? e.payload : e.payload ? JSON.parse(e.payload) : null;
			if (data !== null || data !== '') {
				setCleared(false);
				setBlackedout(false);
			}
			setPresenting(data);
		};

		const onStyle = (e: Event<string>) => {
			const data: ISettingsState | null = Client.isTau ? e.payload : e.payload ? JSON.parse(e.payload) : null;
			if (data) setStyle(data);
		};

		const onClear = () => {
			setCleared(val => !val);
		};

		const onBlackout = () => {
			setBlackedout(val => !val);
		};

		const onControlFocus = (e: Event<boolean>) => {
			if (Client.isTau && e.payload) {
				// appWindow.setFocus();
			}
		};

		const onPresentFocus = (e: Event<boolean>) => {
			if (Client.isTau && e.payload) {
				const window = WebviewWindow.getByLabel('control');
				if (window) {
					window.setFocus();
				}
			}
		};

		let offSet: UnlistenFn = () => null;
		let offStyle: UnlistenFn = () => null;
		let offClear: UnlistenFn = () => null;
		let offBlackout: UnlistenFn = () => null;
		let offControlFocus: UnlistenFn = () => null;
		let offPresentFocus: UnlistenFn = () => null;

		const onMsg = (e: MessageEvent<{ event: string; payload: any }>) => {
			if (e.data.event === EventNames.PRESENT) {
				onSetPresenting(e.data as unknown as Event<any>);
			} else if (e.data.event === EventNames.STYLE) {
				onStyle(e.data as unknown as Event<any>);
			} else if (e.data.event === EventNames.CLEAR) {
				onClear();
			} else if (e.data.event === EventNames.BLACKOUT) {
				onBlackout();
			}
		};

		const setup = async () => {
			if (Client.isTau) {
				const window = WebviewWindow.getByLabel('control');
				if (window) {
					offSet = await window.listen(EventNames.PRESENT, onSetPresenting);
					offStyle = await window.listen(EventNames.STYLE, onStyle);
					offClear = await window.listen(EventNames.CLEAR, onClear);
					offBlackout = await window.listen(EventNames.BLACKOUT, onBlackout);
					offControlFocus = await window.onFocusChanged(onControlFocus);
					offPresentFocus = await appWindow.onFocusChanged(onPresentFocus);
				}
			} else {
				window.addEventListener('message', onMsg, false);
				offSet = () => window.removeEventListener('message', onMsg);
			}
		};

		setup();

		return function () {
			offSet();
			offStyle();
			offClear();
			offBlackout();
			offControlFocus();
			offPresentFocus();
		};
	}, []);

	if (!presenting || blackedout || cleared)
		return (
			<div
				class='PresentWrapper'
				style={{
					backgroundImage: blackedout || !style.background ? null : `url(${style.background.data})`,
				}}
			>
				<div class='Present'></div>
			</div>
		);

	return <PresentingContent data={presenting} style={style} />;
};

export default PresentRoute;
