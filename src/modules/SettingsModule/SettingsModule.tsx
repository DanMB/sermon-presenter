import { h } from 'preact';
import './SettingsModule.scss';

import Settings from '@src/ts/Settings';
import SettingComponent from '@src/components/SettingComponent/SettingComponent';

const SettingsModule = () => {
	return (
		<div class='SettingsModule'>
			<div class='title'>Settings</div>
			<SettingComponent
				title={'Background'}
				type={'file'}
				acceptFiles={'image/jpeg, image/png, image/jpg'}
				setting={Settings.keys.background}
			/>
			<SettingComponent title={'Font'} setting={Settings.keys.font} />
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
			<SettingComponent
				title={'Text position'}
				type={'number'}
				step={'0.1'}
				min={'0'}
				max={'1'}
				setting={Settings.keys.position}
			/>
		</div>
	);
};

export default SettingsModule;
