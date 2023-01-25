import { OptionHTMLAttributes, Ref, SelectHTMLAttributes, useEffect, useState } from 'react';

export interface IOption extends OptionHTMLAttributes<HTMLOptionElement> {
	value: string | number;
	label: string;
}

export interface IProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'defaultValue'> {
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
	const [currentValue, setCurrentValue] = useState<string | number>(
		options.find(o => o.value === defaultValue || o.selected)?.value ?? (type === 'number' ? 0 : '')
	);

	useEffect(() => {
		if (onChange) onChange(currentValue);
	}, [currentValue]);

	return (
		<select
			{...restProps}
			className={`Input ${className}`}
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
						{optionProps.label}
					</option>
				);
			})}
		</select>
	);
};

export default SelectInput;
