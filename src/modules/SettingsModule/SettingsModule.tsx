import { h } from 'preact';
import './SettingsModule.scss';

import { useEffect, useRef, useState } from 'preact/hooks';
import Plus from '@src/components/icons/Plus';

// import main from '../../ts/window';
import Tabs, { useTabs } from '@src/ts/tabs/Tabs';
import SearchInput from '@src/components/Input/SearchInput';
import OurPraise from '@src/ts/OurPraise';
import Settings, { DefaultSettings } from '@src/ts/Settings';
import Music from '@src/components/icons/Music';
import SidebarTab from '@src/components/SidebarTab/SidebarTab';
import Cog from '@src/components/icons/Cog';
import Input from '@src/components/Input/Input';

const SettingsModule = () => {
	return (
		<div class='SettingsModule'>
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
