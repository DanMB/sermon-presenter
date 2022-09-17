import { h } from 'preact';
import './PresentingContent.scss';
import { cleanMultiline } from '@src/utils/textUtils';
import { ISettingsState } from '@src/ts/Settings';
import { useRef } from 'preact/hooks';
import PresentingText from './PresentingText';

const PresentingContent = ({ data, style }: { data?: string; style: ISettingsState }) => {
	if (!data) return null;

	const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

	const containerRef = useRef<HTMLDivElement | null>(null);

	return (
		<div
			class='PresentingContent'
			ref={containerRef}
			style={{
				background: style.background,
				color: style.foreground,
				fontFamily: style.font,
			}}
		>
			<PresentingText
				text={cleanMultiline(data)}
				fontSize={`${clamp(style.scale, 0.1, 5)}em`}
				parentRef={containerRef.current}
				autoScale={style.autoScale}
			/>
		</div>
	);
};

export default PresentingContent;
