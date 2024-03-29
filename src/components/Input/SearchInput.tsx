import { useState, useRef, useEffect } from 'react';
import Input, { IProps } from './Input';

const SearchInput = ({ className, defaultValue, onChange, ...restProps }: IProps) => {
	const [currentValue, setCurrentValue] = useState<string>(defaultValue ?? '');
	const timeout = useRef<number | null>(null);

	useEffect(() => {
		if (onChange) {
			timeout.current = window.setTimeout(() => {
				onChange(currentValue.trim());
			}, 400);
		}

		return function () {
			if (timeout.current) window.clearTimeout(timeout.current);
		};
	}, [currentValue]);

	return (
		<Input
			{...restProps}
			className={`SearchInput ${className}`}
			value={currentValue}
			onChange={val => setCurrentValue(val.trimStart())}
		/>
	);
};

export default SearchInput;
