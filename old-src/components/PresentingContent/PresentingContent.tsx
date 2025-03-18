import './PresentingContent.scss';
import { cleanMultiline } from '@src/utils/textUtils';
import { ISettingsState } from '@src/ts/Settings';
import PresentingText from './PresentingText';
import { useRef } from 'react';

const PresentingContent = ({ data, style }: { data?: string; style: ISettingsState }) => {
	if (!data) return null;

	const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

	const containerRef = useRef<HTMLDivElement | null>(null);
	const position = clamp(style.position, 0, 1);

	return (
		<div
			className='PresentWrapper'
			style={{
				backgroundImage: !style.background ? undefined : `url(${style.background.data})`,
			}}
		>
			<div
				className='PresentingContent'
				ref={containerRef}
				style={{
					color: style.foreground,
					fontFamily: style.font,
					marginTop: position > 0.5 ? 'auto' : undefined,
					// justifyContent: position === 0.5 ? 'center' : position > 0.5 ? 'end' : 'start',
					minHeight: `${100 - 100 * Math.abs(position - 0.5)}vh`,
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
