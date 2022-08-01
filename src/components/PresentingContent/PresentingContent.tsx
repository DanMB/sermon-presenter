import { h } from 'preact';
import './PresentingContent.scss';
import { cleanMultiline } from '@src/utils/textUtils';
import ISongSlide from '@src/types/ISongSlide';

const PresentingContent = ({ data }: { data?: ISongSlide }) => {
	if (!data || !data.text) return null;

	return (
		<div class='PresentingContent'>
			<div class='text'>{cleanMultiline(data.text)}</div>
		</div>
	);
};

export default PresentingContent;
