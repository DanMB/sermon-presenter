import IInnerGroupData from './IInnerGroupData';

export default interface ISlideData {
	number: number;
	group: IInnerGroupData;
	content: string;
	image?: string;
}
