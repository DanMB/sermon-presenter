import { h } from 'preact';
import './PresentingContent.scss';
import { cleanMultiline } from '@src/utils/textUtils';
import ISongSlide from '@src/types/ISongSlide';

const PresentingContent = ({ data }: { data?: string }) => {
	if (!data) return null;

	return (
		<div class='PresentingContent'>
			<div class='text'>{cleanMultiline(data)}</div>
		</div>
	);
};

export default PresentingContent;
