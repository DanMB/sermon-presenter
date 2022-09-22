import { h, JSX } from 'preact';
import { Ref, useEffect, useState } from 'preact/hooks';
import './Input.scss';

export interface IProps extends Omit<JSX.HTMLAttributes<HTMLInputElement>, 'onChange' | 'defaultValue'> {
	label: string;
	defaultValue?: boolean;
	onChange?: (value: boolean) => void;
	inputRef?: Ref<HTMLInputElement>;
}

const CheckboxInput = ({ className, label, defaultValue, onChange, inputRef, type, ...restProps }: IProps) => {
	const [currentValue, setCurrentValue] = useState<boolean>(defaultValue ?? false);

	useEffect(() => {
		if (onChange) onChange(currentValue);
	}, [currentValue]);

	return (
		<div className='CheckboxInput'>
			<input
				{...restProps}
				class={`Input ${className}`}
				type={'checkbox'}
				ref={inputRef}
				checked={currentValue}
				aria-label={label}
				onChange={e => {
					setCurrentValue((e?.target as HTMLInputElement)?.checked ?? false);
				}}
				onKeyUp={e => {
					setCurrentValue((e?.target as HTMLInputElement)?.checked ?? false);
				}}
			/>
			<label className='CustomCheckbox' for={restProps.id}></label>
		</div>
	);
};

export default CheckboxInput;
