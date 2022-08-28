export default interface IOurPraiseSong {
	id: string;
	key: string;
	title: string;
	authors: string;
	transpose?: number;
	comment?: string;
	body: string;
}
