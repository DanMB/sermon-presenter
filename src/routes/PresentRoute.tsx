import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Storage from '@src/ts/Storage';
import Client from '@src/ts/Client';
import PresentingContent from '@src/components/PresentingContent/PresentingContent';
import { WebviewWindow } from '@tauri-apps/api/window';
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
			const data: string | null = e.payload ? JSON.parse(e.payload) : null;
			if (data !== null || data !== '') {
				setCleared(false);
				setBlackedout(false);
			}
			setPresenting(data);
		};

		const onStyle = (e: Event<string>) => {
			const data: ISettingsState | null = e.payload ? JSON.parse(e.payload) : null;
			if (data) setStyle(data);
		};

		let offSet: UnlistenFn = () => null;
		let offStyle: UnlistenFn = () => null;

		const onMsg = (e: MessageEvent<{ event: string; payload: any }>) => {
			if (e.data.event === EventNames.PRESENT) {
				onSetPresenting(e.data as unknown as Event<any>);
			} else if (e.data.event === EventNames.STYLE) {
				onStyle(e.data as unknown as Event<any>);
			} else if (e.data.event === EventNames.CLEAR) {
				setCleared(val => !val);
			} else if (e.data.event === EventNames.BLACKOUT) {
				setBlackedout(val => !val);
			}
		};

		const setup = async () => {
			if (Client.isTau) {
				const window = WebviewWindow.getByLabel('control');
				if (window) offSet = await window.listen(EventNames.PRESENT, onSetPresenting);
				if (window) offStyle = await window.listen(EventNames.STYLE, onStyle);
			} else {
				window.addEventListener('message', onMsg, false);
				offSet = () => window.removeEventListener('message', onMsg);
			}
		};

		setup();

		return function () {
			offSet();
			offStyle();
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
