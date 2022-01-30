import { h } from 'preact';

export interface TooltipProps {
	text: string;
	className: string;
	children: preact.ComponentChildren;
}

const Tooltip = ({ text, className, children }: TooltipProps) => {
	return (
		<span data-component='Tooltip' class={className}>
			{children}
		</span>
	);
};

export default Tooltip;
