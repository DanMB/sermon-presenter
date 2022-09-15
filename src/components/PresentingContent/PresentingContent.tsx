import { h } from 'preact';
import './PresentingContent.scss';
import { cleanMultiline } from '@src/utils/textUtils';
import { ISettingsState } from '@src/ts/Settings';
import { useRef } from 'preact/hooks';
import PresentingText from './PresentingText';

const PresentingContent = ({ data, style }: { data?: string; style: ISettingsState }) => {
	if (!data) return null;

	const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

	const padding = (value: number, unit: 'w' | 'h') => {
		return `${clamp(value / 10, 0.5, 25)}v${unit}`;
	};

	const containerRef = useRef<HTMLDivElement | null>(null);

	return (
		<div
			class='PresentingContent'
			ref={containerRef}
			style={{
				background: style.background,
				color: style.foreground,
				fontFamily: style.font,
				borderTopWidth: padding(style.padding.top, 'h'),
				borderRightWidth: padding(style.padding.right, 'w'),
				borderBottomWidth: padding(style.padding.bottom, 'h'),
				borderLeftWidth: padding(style.padding.left, 'w'),
			}}
		>
			<PresentingText
				text={cleanMultiline(data)}
				fontSize={`${clamp(style.scale, 0.1, 5)}em`}
				parentRef={containerRef.current}
			/>
		</div>
	);
};

export default PresentingContent;
