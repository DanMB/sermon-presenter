import ISetList from './ISetList';

export default interface ITabData<D = ISetList, T = string> {
	id: string;
	name: string;
	data: D;
	type: T;
	active: string;
}
