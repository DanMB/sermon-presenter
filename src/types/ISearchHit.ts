export interface ISearchHighlight {
	value: string;
	matchLevel: string;
	fullyHighlighted?: boolean;
	matchedWords: string[];
}

export default interface ISearchHit {
	authors: string;
	key: string;
	id: string;
	title: string;
}
