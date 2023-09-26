export default interface IWindowFeatures {
	width: number;
	height: number;
	top?: number;
	left?: number;
	location?: boolean;
	menubar?: boolean;
	resizable?: boolean;
	scrollbars?: boolean;
	status?: boolean;
	toolbar?: boolean;
	fullscreen?: boolean;
}
