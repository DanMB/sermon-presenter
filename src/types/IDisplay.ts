export default interface IDisplay {
	id: number;
	bounds: {
		x: number;
		y: number;
		width: number;
		height: number;
	};
	workarea: {
		x: number;
		y: number;
		width: number;
		height: number;
	};
}
