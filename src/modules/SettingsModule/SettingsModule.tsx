import { h } from 'preact';
import './SettingsModule.scss';

import Settings, { DefaultSettings } from '@src/ts/Settings';
import Input from '@src/components/Input/Input';
import PresentWindow from '@src/ts/presenter/PresentWindow';
import { useEffect } from 'preact/hooks';

const SettingsModule = () => {
	const useFont = Settings.use(state => state.font);
	const useBackground = Settings.use(state => state.background);
	const useScale = Settings.use(state => state.scale);

	const send = () => {
		PresentWindow.get()?.style(Settings.get());
	};

	return (
		<div class='SettingsModule'>
			<div class='title'>Settings</div>
			<div class='setting'>
				<label for='font'>Font</label>
				<Input
					label={'font'}
					id={'font'}
					defaultValue={useFont}
					placeholder={DefaultSettings.font}
					onChange={value => {
						Settings.set({
							font: value || DefaultSettings.font,
						});
					}}
				/>
			</div>
			<div class='setting'>
				<label for='background'>Background</label>
				<Input
					label={'background'}
					id={'background'}
					defaultValue={useBackground}
					placeholder={DefaultSettings.background}
					onChange={value => {
						Settings.set({
							background: value || DefaultSettings.background,
						});
					}}
				/>
			</div>
			<div class='setting'>
				<label for='scale'>Scale</label>
				<Input
					label={'scale'}
					id={'scale'}
					type={'number'}
					defaultValue={`${useScale}`}
					placeholder={`${DefaultSettings.scale}`}
					step={'0.1'}
					min={'0.1'}
					max={'5'}
					onChange={value => {
						Settings.set({
							scale: parseFloat(value) || DefaultSettings.scale,
						});
					}}
				/>
			</div>
			<div class='saveButton' onClick={send}>
				Save settings
			</div>
		</div>
	);
};

export default SettingsModule;
