import { h, JSX } from 'preact';
import { Ref, useEffect, useState } from 'preact/hooks';

export interface IOption extends JSX.HTMLAttributes<HTMLOptionElement> {
	value: string | number;
	label: string;
}

export interface IProps extends Omit<JSX.HTMLAttributes<HTMLSelectElement>, 'onChange' | 'defaultValue'> {
	label: string;
	defaultValue?: string | number;
	invalid?: boolean;
	onChange?: (value: string | number) => void;
	inputRef?: Ref<HTMLSelectElement>;
	options: IOption[];
	type?: string;
}

const SelectInput = ({
	className,
	label,
	defaultValue,
	onChange,
	inputRef,
	type = 'text',
	options,
	...restProps
}: IProps) => {
	console.log(
		defaultValue,
		options.find(o => o.value === defaultValue || o.selected)
	);
	const [currentValue, setCurrentValue] = useState<string | number>(
		options.find(o => o.value === defaultValue || o.selected)?.value ?? (type === 'number' ? 0 : '')
	);

	useEffect(() => {
		if (onChange) onChange(currentValue);
	}, [currentValue]);

	return (
		<select
			{...restProps}
			class={`SelectInput ${className}`}
			ref={inputRef}
			aria-label={label}
			onChange={e => {
				setCurrentValue((e?.target as HTMLSelectElement)?.value ?? '');
			}}
		>
			{options.map(optionProps => {
				if (!optionProps.label) return null;
				return (
					<option {...optionProps} key={optionProps.value} selected={optionProps.value === currentValue}>
						{label}
					</option>
				);
			})}
		</select>
	);
};

export default SelectInput;
