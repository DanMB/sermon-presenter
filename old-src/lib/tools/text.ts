export default class text {
	private static whitespaceWithoutNewline = /[^\S\r\n]{2,}/g;

	public static cleanMultiline = (str: string) => {
		return str.replace(text.whitespaceWithoutNewline, ' ');
	};
}
