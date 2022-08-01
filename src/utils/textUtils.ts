const whitespaceWithoutNewline = /[^\S\r\n]{2,}/g;

export function cleanMultiline(text: string): string {
	return text.replace(whitespaceWithoutNewline, '');
}
