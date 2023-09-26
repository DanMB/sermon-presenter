import { useState, useRef, useEffect, MouseEvent } from 'react';
import Close from '../icons/Close';
import Upload from '../icons/Upload';
import Input, { IProps } from './Input';

export interface IFileData {
	lastModified: number;
	name: string;
	type: string;
	data: string | ArrayBuffer;
}

export interface IFileInputProps extends Omit<IProps, 'onChange' | 'defaultValue'> {
	acceptFiles?: string;
	defaultValue?: IFileData | null;
	onChange?: (value: IFileData | null) => void;
}

const FileInput = ({ className, defaultValue, onChange, acceptFiles, ...restProps }: IFileInputProps) => {
	const [currentValue, setCurrentValue] = useState<IFileData | null>(defaultValue ?? null);
	const data = useRef<File | null>(null);
	const input = useRef<HTMLInputElement | null>(null);
	const reader = useRef(new FileReader());

	useEffect(() => {
		if (onChange) onChange(currentValue);
	}, [currentValue]);

	useEffect(() => {
		reader.current.addEventListener('load', onFileLoaded);

		return function () {
			reader.current.removeEventListener('load', onFileLoaded);
		};
	}, [reader]);

	const clearInput = (e: MouseEvent<SVGSVGElement>) => {
		e.preventDefault();
		data.current = null;
		setCurrentValue(null);
	};

	const onFileLoaded = (e: ProgressEvent<FileReader>) => {
		if (e.target?.result && data.current) {
			setCurrentValue({
				lastModified: data.current?.lastModified,
				name: data.current?.name,
				type: data.current?.type,
				data: e.target?.result,
			});
		} else {
			setCurrentValue(null);
		}
	};

	const internalChange = () => {
		if (reader.current && input.current?.files && input.current?.files[0]) {
			data.current = input.current?.files[0];
			reader.current.readAsDataURL(data.current);
		} else {
			data.current = null;
		}
	};

	return (
		<div className='FileInput'>
			<Input
				{...restProps}
				inputRef={input}
				type='file'
				accept={acceptFiles ?? 'image/jpeg, image/png, image/jpg'}
				value={currentValue?.name}
				data-value={currentValue?.name ?? 'none'}
				onChange={internalChange}
			/>
			<label className='CustomFile' htmlFor={restProps.id}>
				<Upload />
				<span>{currentValue?.name ?? 'No file chosen'}</span>
				<Close className='clear' onClick={clearInput} />
			</label>
		</div>
	);
};

export default FileInput;
