import { h } from 'preact';
import './SettingsModule.scss';

import Settings from '@src/ts/Settings';
import SettingComponent from '@src/components/SettingComponent/SettingComponent';
import FileInput from '@src/components/Input/FileInput';

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
			<SettingComponent
				title={'Text position'}
				type={'number'}
				setting={Settings.keys.position}
				options={[
					{
						label: '0%',
						value: 0,
					},
					{
						label: '25%',
						value: 0.25,
					},
					{
						label: '50%',
						value: 0.5,
					},
					{
						label: '75%',
						value: 0.75,
					},
					{
						label: '100%',
						value: 1,
					},
				]}
			/>
		</div>
	);
};

export default SettingsModule;
