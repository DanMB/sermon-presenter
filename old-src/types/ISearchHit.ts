export interface ISearchHighlight {
	value: string;
	matchLevel: string;
	fullyHighlighted?: boolean;
	matchedWords: string[];
}

export default interface ISearchHit {
	authors: string;
	key: string;
	lastmodified: number;
	objectID: string;
	path: string;
	title: string;
	_highlightResult: {
		authors: ISearchHighlight;
		key: ISearchHighlight;
		lastmodified: ISearchHighlight;
		path: ISearchHighlight;
		title: ISearchHighlight;
	};
}
