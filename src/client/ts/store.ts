import ContextStore from '../core/ContextStore';
import { Context } from 'preact';
import IStoreData from './IStoreData';
import main from './window';
import IGroupData from '../../types/IGroupData';

const savedGroups = main.get('groups') as Array<IGroupData>;
const savedViewingGroup = main.get('viewingGroup', false) as string;

const urlParams = new URLSearchParams(window.location.search);

export const DEFAULT_STATE: IStoreData = {
	groups: savedGroups || [],
	route: urlParams.get('window'),
	viewingGroup: savedViewingGroup || (savedGroups && savedGroups[0] ? savedGroups[0].id : 'add'),
	isPresenting: false,
	activeSlide: null,
};

export interface IStoreType {
	state: IStoreData;
	dispatch: (action: { type: string; value: any }) => void;
}

const setIsPresenting = (state: IStoreData, value: boolean): IStoreData => {
	return { ...state, isPresenting: value };
};

const setState = (state: IStoreData, value: any): IStoreData => {
	main.save('store', value);
	return { ...state, ...value };
};

const addGroup = (state: IStoreData, value: IGroupData, switchView: boolean = true): IStoreData => {
	var groups = state.groups;
	var index = groups.findIndex(g => g.id === value.id);
	if (index >= 0) {
		let activeSlide = groups[index].activeSlide;
		groups[index] = {
			...value,
			activeSlide,
		};
	} else {
		groups.push(value);
	}
	main.save('groups', groups);
	if (switchView) {
		main.save('viewingGroup', value.id);
		return { ...state, groups, viewingGroup: value.id };
	} else {
		return { ...state, groups };
	}
};

const removeGroup = (state: IStoreData, value: string): IStoreData => {
	var groups = state.groups.filter(g => g.id !== value);

	main.save('groups', groups);

	if (state.viewingGroup === value) {
		if (groups[0]) {
			main.save('viewingGroup', groups[0].id);
			return { ...state, groups, viewingGroup: groups[0].id };
		} else {
			main.save('viewingGroup', 'add');
			return { ...state, groups, viewingGroup: 'add' };
		}
	} else {
		return { ...state, groups };
	}
};

const viewGroup = (state: IStoreData, value: string): IStoreData => {
	main.save('viewingGroup', value);
	return { ...state, viewingGroup: value };
};

export const Store = new ContextStore(DEFAULT_STATE, {
	setIsPresenting,
	setState,
	addGroup,
	removeGroup,
	viewGroup,
});

export const StoreContext = Store.ct as Context<IStoreType>;
export const Provider = Store.ct.Provider as preact.Provider<IStoreType>;
// export const Reducers = Store.reducerNames;

export default Store;
