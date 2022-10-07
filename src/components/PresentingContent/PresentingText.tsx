import { h } from 'preact';
import './PresentingContent.scss';
import { getCanvasFont, getCssStyle, getTextWidth } from '@src/utils/textUtils';
import { useEffect, useRef, useState } from 'preact/hooks';
const newLine = /\r?\n/;

const PresentingText = ({
	text,
	fontSize,
	parentRef,
	autoScale = true,
}: {
	text: string;
	fontSize: string;
	parentRef?: HTMLDivElement | null;
	autoScale: boolean;
}) => {
	const [scale, setScale] = useState<number>(1);
	const [actualText, setText] = useState<string>('');

	const element = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (element.current) {
			const parent = parentRef ?? element.current.parentElement;
			if (parent) {
				const style = getComputedStyle(parent);
				const maxWidth = parent.clientWidth;
				const maxHeight = parseInt(style.maxHeight) - parseInt(style.marginTop) - parseInt(style.marginBottom);

				const lines = text.split(newLine).length;
				const lineHeight = parseInt(getCssStyle(element.current, 'line-height') || '1.2em');

				const textWidth = getTextWidth(text, getCanvasFont(element.current));
				const textHeight = lineHeight * lines;

				let newScale = 1;

				if (textWidth > maxWidth) {
					const tryScale = maxWidth / textWidth;
					if (tryScale < newScale) newScale = tryScale;
				}

				if (textHeight > maxHeight) {
					const tryScale = maxHeight / textHeight;
					if (tryScale < newScale) newScale = tryScale;
				}

				setScale(newScale);
				setText(text);
			}
		}
	}, [text]);

	return (
		<div
			class='text'
			ref={element}
			style={{
				transform: `scale(${autoScale ? scale : 1})`,
				fontSize: fontSize,
				whiteSpace: autoScale ? 'pre' : 'pre-wrap',
			}}
		>
			{actualText}
		</div>
	);
};

export default PresentingText;
