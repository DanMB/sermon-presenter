const whitespaceWithoutNewline = /[^\S\r\n]{2,}/g;
const newLine = /\r?\n/;

export function cleanMultiline(text: string): string {
	return text.replace(whitespaceWithoutNewline, '');
}

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
export function getTextWidth(text: string, font: string, canvasRef?: HTMLCanvasElement): number {
	// re-use canvas object for better performance
	const canvas = canvasRef ?? document.createElement('canvas');
	const context = canvas.getContext('2d');
	if (!context) return -1;
	context.font = font;

	const split = text.split(newLine);
	let width = 0;

	for (const line of split) {
		const metrics = context.measureText(line);
		if (metrics.width > width) width = metrics.width;
	}
	return width;
}

export function getCssStyle(element: HTMLElement, prop: string): string {
	return window.getComputedStyle(element, null).getPropertyValue(prop);
}

export function getCanvasFont(el = document.body) {
	const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
	const fontSize = getCssStyle(el, 'font-size') || '16px';
	const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';

	return `${fontWeight} ${fontSize} ${fontFamily}`;
}
