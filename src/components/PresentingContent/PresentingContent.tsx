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
	const position = clamp(style.position, 0, 1);

	return (
		<div
			class='PresentWrapper'
			style={{
				background: style.background,
			}}
		>
			<div
				class='PresentingContent'
				ref={containerRef}
				style={{
					color: style.foreground,
					fontFamily: style.font,
					marginTop: position > 0.5 ? 'auto' : null,
					height: `${100 - 100 * Math.abs(position - 0.5)}vh`,
				}}
			>
				<PresentingText
					text={cleanMultiline(data)}
					fontSize={`${clamp(style.scale, 0.1, 5)}em`}
					parentRef={containerRef.current}
					autoScale={style.autoScale}
				/>
			</div>
		</div>
	);
};

export default PresentingContent;
