import { h, JSX } from 'preact';

const Close = (props: JSX.HTMLAttributes<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
			{...props}
		>
			<line x1='18' y1='6' x2='6' y2='18'></line>
			<line x1='6' y1='6' x2='18' y2='18'></line>
		</svg>
	);
};

export default Close;