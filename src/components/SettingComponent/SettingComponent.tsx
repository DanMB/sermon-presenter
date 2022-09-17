import { h, JSX } from 'preact';
import './SettingComponent.scss';

import Settings, { DefaultSettings, ISettingKey } from '@src/ts/Settings';
import Input from '@src/components/Input/Input';
import CheckboxInput from '@src/components/Input/CheckboxInput';
import PresentWindow from '@src/ts/presenter/PresentWindow';

export interface IProps {
	setting: ISettingKey;
	title: string;
	id?: string;
	type?: string;
	step?: string | number;
	min?: string | number;
	max?: string | number;
}

const SettingComponent = ({ setting, id, title, type = 'text', ...restProps }: IProps) => {
	// @ts-ignore
	const useSetting = Settings.use(state => state[setting.key]);
	const InputComponent = type === 'checkbox' ? CheckboxInput : Input;
	const uid = id ?? title.toLowerCase().replaceAll(/\w+/g, '-');
	// @ts-ignore
	const defaultVal = DefaultSettings[setting.key];

	const handleChange = (value: string | number | boolean) => {
		Settings.set(() => {
			let newValue = value;
			if (type === 'number') newValue = parseFloat(value as string);
			if (type === 'checkbox') newValue = value ?? defaultVal;
			else newValue = value || defaultVal;

			return {
				[setting.key]: newValue,
			};
		});

		PresentWindow.get()?.style(Settings.get());
	};

	return (
		<div class='SettingComponent'>
			<label for={uid}>{title}</label>
			<InputComponent
				label={title}
				id={uid}
				type={type}
				defaultValue={useSetting}
				placeholder={defaultVal}
				onChange={handleChange}
				{...restProps}
			/>
		</div>
	);
};

export default SettingComponent;
