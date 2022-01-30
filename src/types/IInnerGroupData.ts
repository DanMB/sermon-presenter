import { GroupTypes } from './IGroupData';

export default interface IInnerGroupData {
	type: GroupTypes;
	name: string;
	id: string;
	thumbnail?: string;
}
