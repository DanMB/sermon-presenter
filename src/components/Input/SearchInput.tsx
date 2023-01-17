import { h, JSX } from 'preact';
import { Ref, useEffect, useRef, useState } from 'preact/hooks';
import Input, { IProps } from './Input';

const SearchInput = ({ className, defaultValue, onChange, ...restProps }: IProps) => {
	const [currentValue, setCurrentValue] = useState<string>(defaultValue ?? '');
	const timeout = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (onChange) {
			if (timeout.current) clearTimeout(timeout);

			timeout.current = setTimeout(() => {
				onChange(currentValue.trim());
			}, 500);
		}
	}, [currentValue]);

	useEffect(() => {
		return function () {
			if (timeout.current) clearTimeout(timeout);
		};
	}, []);

	return (
		<Input
			{...restProps}
			class={`SearchInput ${className}`}
			value={currentValue}
			onChange={val => setCurrentValue(val.trimStart())}
		/>
	);
};

export default SearchInput;
