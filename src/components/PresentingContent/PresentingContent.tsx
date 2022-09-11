import { h } from 'preact';
import './PresentingContent.scss';
import { cleanMultiline } from '@src/utils/textUtils';
import ISongSlide from '@src/types/ISongSlide';
import { ISettingsState } from '@src/ts/Settings';

const PresentingContent = ({ data, style }: { data?: string; style: ISettingsState }) => {
	if (!data) return null;

	const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

	const padding = (value: number, unit: 'w' | 'h') => {
		return `${clamp(value / 10, 0.5, 25)}v${unit}`;
	};

	return (
		<div
			class='PresentingContent'
			style={{
				background: style.background,
				color: style.foreground,
				fontFamily: style.font,
				paddingTop: padding(style.padding.top, 'h'),
				paddingRight: padding(style.padding.right, 'w'),
				paddingBottom: padding(style.padding.bottom, 'h'),
				paddingLeft: padding(style.padding.left, 'w'),
			}}
		>
			<div
				class='text'
				style={{
					fontSize: `${clamp(style.scale, 0.1, 5)}em`,
				}}
			>
				{cleanMultiline(data)}
			</div>
		</div>
	);
};

export default PresentingContent;
