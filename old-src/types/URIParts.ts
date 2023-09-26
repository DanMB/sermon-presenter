import { CustomProtocol } from './CustomURI';

export enum UriParts {
	TYPE = 0,
	ID = 1,
	SONG = 2,
	SLIDE = 3,
}

export enum TabType {
	NEWTAB = 'newtab',
	SETLIST = 'setlist',
	PRESENT = 'present',
}

export const newtabUri = `${CustomProtocol}://${TabType.NEWTAB}`;
