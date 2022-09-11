import { h } from 'preact';
import './SettingsModule.scss';

import Settings, { DefaultSettings } from '@src/ts/Settings';
import Input from '@src/components/Input/Input';

const SettingsModule = () => {
	return (
		<div class='SettingsModule'>
			<div class='title'>Settings</div>
			<div class='setting'>
				<label for='font'>Font</label>
				<Input
					label={'font'}
					id={'font'}
					defaultValue={Settings.get().font}
					placeholder={Settings.get().font}
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
					defaultValue={Settings.get().background}
					placeholder={Settings.get().background}
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
					defaultValue={`${Settings.get().scale}`}
					placeholder={`${DefaultSettings.scale}`}
					step={'0.1'}
					min={'0.1'}
					max={'5'}
					onChange={value => {
						Settings.set({
							scale: parseInt(value) || DefaultSettings.scale,
						});
					}}
				/>
			</div>
		</div>
	);
};

export default SettingsModule;
