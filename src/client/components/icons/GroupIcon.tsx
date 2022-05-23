import { h } from 'preact';
// import { GroupTypes } from '../../../types/IGroupData';
import Music from './Music';
import Powerpoint from './Powerpoint';
import Video from './Video';

const GroupIcon = ({ type }: { type?: any }) => {
	return <Music />;
	// return type === GroupTypes.POWERPOINT ? (
	// 	<Powerpoint />
	// ) : type === GroupTypes.VIDEO ? (
	// 	<Video />
	// ) : type === GroupTypes.SONGS ? (
	// 	<Music />
	// ) : (
	// 	<></>
	// );
};

export default GroupIcon;
