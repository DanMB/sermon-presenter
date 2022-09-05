import { h, JSX } from 'preact';
import { Ref, useEffect, useState } from 'preact/hooks';
import './Input.scss';

export interface IProps extends Omit<JSX.HTMLAttributes<HTMLInputElement>, 'onChange'> {
	label: string;
	defaultValue?: string;
	hint?: string;
	prefix?: string;
	invalid?: boolean;
	onChange?: (value: string) => void;
	inputRef?: Ref<HTMLInputElement>;
}

const Input = ({
	className,
	label,
	defaultValue,
	hint,
	prefix,
	invalid,
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
			class={`Input ${className}`}
			autoComplete={autoComplete ?? 'off'}
			type={type ?? 'text'}
			ref={inputRef}
			value={currentValue}
			aria-label={label}
			onChange={e => {
				setCurrentValue((e?.target as HTMLInputElement)?.value ?? '');
			}}
		/>
	);
};

export default Input;
