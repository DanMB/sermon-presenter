import { h, Ref } from 'preact';
import './NumberInput.scss';
import { useEffect, useState, useRef } from 'preact/hooks';

export interface NumberInputEvent {
	id?: string;
	value: number;
}

export interface NumberInputProps {
	id?: string;
	value?: number;
	max?: number;
	min?: number;
	step?: number;
	pretext?: string;
	apptext?: string;
	onChange?: (e: NumberInputEvent) => void;
}

const NumberInput = ({
	value = 0,
	max = Infinity,
	min = 0,
	step = 1,
	pretext,
	apptext,
	id,
	onChange = () => {},
}: NumberInputProps) => {
	const [number, setNumber] = useState(value);

	const clickPlus = () => {
		plus();
	};

	const clickMinus = () => {
		minus();
	};

	const handleNewNum = (newNum: number) => {
		if (number === newNum || newNum > max || newNum < min) return;
		setNumber(newNum);
		onChange({
			value: newNum,
			id,
		});
	};

	const plus = (change = step) => {
		let newNum = number + change;

		if (newNum > max && number < max) {
			newNum = max;
		} else if (newNum < min) {
			newNum = min;
		}

		handleNewNum(newNum);
	};

	const minus = (change = step) => {
		let newNum = number - change;

		if (newNum < min && number > min) {
			newNum = min;
		} else if (newNum > max) {
			newNum = max;
		}

		handleNewNum(newNum);
	};

	const onKeyDown = (e: KeyboardEvent) => {
		if (/^[a-z0-9]$/i.test(e.key)) e.preventDefault();

		if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
			minus(e.shiftKey ? step * 10 : step);
		} else if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
			plus(e.shiftKey ? step * 10 : step);
		} else if (e.key === 'Backspace' || e.key === 'Clear' || e.key === 'Delete' || e.key === 'Paste') {
			handleNewNum(min);
		}
	};

	const mouseDown = (e: MouseEvent) => {
		e.preventDefault();
	};

	return (
		<div class='NumberInput' id={id}>
			<span onClick={clickPlus} onMouseDown={mouseDown} data-disabled={number + step > max}>
				+
			</span>
			<input type='number' onKeyDown={onKeyDown} tabIndex={0} min={min} max={max} value={number} step={step} />
			<span onClick={clickMinus} onMouseDown={mouseDown} data-disabled={number - step < min}>
				-
			</span>
		</div>
	);
};

export default NumberInput;
