import IGroupData from '../../types/IGroupData';
import ISlideData from '../../types/ISlideData';

export default interface IStoreData {
	route: string;
	viewingGroup: string;
	isPresenting: boolean;
	activeSlide: ISlideData;
	groups: Array<IGroupData>;
}
