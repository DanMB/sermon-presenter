import { h } from 'preact';
import './SettingsModule.scss';

import Settings, { DefaultSettings } from '@src/ts/Settings';
import Input from '@src/components/Input/Input';
import PresentWindow from '@src/ts/presenter/PresentWindow';
import { useEffect } from 'preact/hooks';
import CheckboxInput from '@src/components/Input/CheckboxInput';
import SettingComponent from '@src/components/SettingComponent/SettingComponent';

const SettingsModule = () => {
	const send = () => {
		PresentWindow.get()?.style(Settings.get());
	};

	return (
		<div class='SettingsModule'>
			<div class='title'>Settings</div>
			<SettingComponent title={'Font'} setting={Settings.keys.font} />
			<SettingComponent title={'Background'} setting={Settings.keys.background} />
			<SettingComponent title={'Foreground'} setting={Settings.keys.foreground} />
			<SettingComponent
				title={'Scale'}
				type={'number'}
				step={'0.1'}
				min={'0.1'}
				max={'5'}
				setting={Settings.keys.scale}
			/>
			<SettingComponent title={'Auto-scale text down'} type={'checkbox'} setting={Settings.keys.autoScale} />
		</div>
	);
};

export default SettingsModule;
