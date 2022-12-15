import { h } from 'preact';
import './Slide.scss';

import { current } from '@src/ts/presenter/hooks';
import { cleanMultiline } from '@src/utils/textUtils';

export interface ISlideProps extends h.JSX.HTMLAttributes<HTMLDivElement> {
	id: string;
	hotkey?: {
		key: string;
		shift?: boolean;
		ctrl?: boolean;
		alt?: boolean;
		meta?: boolean;
	};
	text?: string;
}

const Slide = ({ id, hotkey, text, children, tabIndex = -1, ...restProps }: ISlideProps) => {
	const presentingCurrent = current.use();

	return (
		<div
			{...restProps}
			id={id}
			tabIndex={tabIndex}
			role='listitem'
			class={`Slide ${presentingCurrent === id ? 'active' : ''}`}
		>
			{hotkey ? (
				<div class='hotkey'>
					{hotkey.shift ? <li></li> : <></>}
					{hotkey.key}
				</div>
			) : (
				<></>
			)}
			<div class='preview'>
				{children ? (
					children
				) : text ? (
					<div class='textContent'>
						<div class='inner'>{cleanMultiline(text)}</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default Slide;
