import { h } from 'preact';
import './SettingsModule.scss';

import Settings, { DefaultSettings } from '@src/ts/Settings';
import Input from '@src/components/Input/Input';
import PresentWindow from '@src/ts/presenter/PresentWindow';
import { useEffect } from 'preact/hooks';
import CheckboxInput from '@src/components/Input/CheckboxInput';

const SettingsModule = () => {
	const useFont = Settings.use(state => state.font);
	const useBackground = Settings.use(state => state.background);
	const useForeground = Settings.use(state => state.foreground);
	const useScale = Settings.use(state => state.scale);
	const usePadding = Settings.use(state => state.padding);
	const useAutoScale = Settings.use(state => state.autoScale);

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
				<label for='foreground'>Foreground</label>
				<Input
					label={'foreground'}
					id={'foreground'}
					defaultValue={useForeground}
					placeholder={DefaultSettings.foreground}
					onChange={value => {
						Settings.set({
							foreground: value || DefaultSettings.foreground,
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
			<div class='setting'>
				<label for='pad-top'>Padding top</label>
				<Input
					label={'pad-top'}
					id={'pad-top'}
					type={'number'}
					defaultValue={`${usePadding.top}`}
					placeholder={`${DefaultSettings.padding.top}`}
					step={'5'}
					min={'5'}
					max={'250'}
					onChange={value => {
						Settings.set(state => ({
							padding: {
								...state.padding,
								top: parseInt(value) || DefaultSettings.padding.top,
							},
						}));
					}}
				/>
			</div>
			<div class='setting'>
				<label for='pad-bot'>Padding bottom</label>
				<Input
					label={'pad-bot'}
					id={'pad-bot'}
					type={'number'}
					defaultValue={`${usePadding.bottom}`}
					placeholder={`${DefaultSettings.padding.bottom}`}
					step={'5'}
					min={'5'}
					max={'250'}
					onChange={value => {
						Settings.set(state => ({
							padding: {
								...state.padding,
								bottom: parseInt(value) || DefaultSettings.padding.bottom,
							},
						}));
					}}
				/>
			</div>
			<div class='setting'>
				<label for='scale'>Auto-scale text down</label>
				<CheckboxInput
					label={'scale'}
					id={'scale'}
					type={'checkbox'}
					defaultValue={useAutoScale}
					onChange={value => {
						Settings.set(() => ({
							autoScale: value ?? DefaultSettings.autoScale,
						}));
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
