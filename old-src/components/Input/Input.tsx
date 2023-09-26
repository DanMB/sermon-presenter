import { InputHTMLAttributes, Ref, useEffect, useState } from 'react';
import './Input.scss';

export interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	label: string;
	defaultValue?: string;
	invalid?: boolean;
	onChange?: (value: string) => void;
	inputRef?: Ref<HTMLInputElement>;
}

const Input = ({
	className,
	label,
	defaultValue,
	onChange,
	inputRef,
	type,
	autoComplete = 'off',
	...restProps
}: IProps) => {
	const [currentValue, setCurrentValue] = useState<string>(defaultValue ?? '');

	useEffect(() => {
		if (onChange) onChange(currentValue);
	}, [currentValue]);

	return (
		<input
			{...restProps}
			className={`Input ${className}`}
			autoComplete={autoComplete ?? 'off'}
			type={type ?? 'text'}
			ref={inputRef}
			value={currentValue}
			aria-label={label}
			onChange={e => {
				setCurrentValue((e?.target as HTMLInputElement)?.value ?? '');
			}}
			onKeyUp={e => {
				setCurrentValue((e?.target as HTMLInputElement)?.value ?? '');
			}}
		/>
	);
};

export default Input;
