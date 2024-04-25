export const id = (...args: (string | number | undefined)[]) => {
	return 'dan-ui__' + args.join('__');
};
