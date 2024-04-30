export const id = (...args: (string | number | undefined)[]) => {
	return 'dan-ui__' + args.filter(a => a !== undefined).join('__');
};
