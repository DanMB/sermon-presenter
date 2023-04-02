import * as Toast from '@radix-ui/react-toast';
import create from 'zustand';
import './ToastModule.scss';

export interface IToastProps {
	id: string;
	title?: string;
	text: string;
	theme?: string;
	type?: 'foreground' | 'background';
}

export interface IToastState {
	items: IToastProps[];
}

export default class ToastManager {
	public static TIMEOUT = 3000;
	private static _store = create<IToastState>((set, get) => ({
		items: [],
	}));

	public static add = (props: IToastProps) => {
		const items = [...ToastManager._store.getState().items];
		const index = items.findIndex(toast => toast.id === props.id);

		if (index >= 0) {
			items.splice(index, 1);
		}
		items.push(props);

		ToastManager._store.setState({
			items,
		});
	};

	public static remove = (id: string) => {
		const items = [...ToastManager._store.getState().items];
		const index = items.findIndex(toast => toast.id === id);
		if (index < 0) {
			items.splice(index, 1);
			ToastManager._store.setState({
				items,
			});
		}
	};

	public static clear = () => {
		ToastManager._store.setState({
			items: [],
		});
	};

	public static test = () => {
		const id = new Date().getTime();

		ToastManager.add({
			id: id.toString(),
			text: 'Something toast',
		});
	};

	public static Container = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
		return (
			<Toast.Provider swipeDirection='right' duration={ToastManager.TIMEOUT}>
				<ToastManager.Toasts />
				{children}
				<Toast.Viewport className='ToastViewport' />
			</Toast.Provider>
		);
	};

	public static Toasts = () => {
		const items = ToastManager._store(state => state.items);

		return (
			<>
				{items.map(toast => (
					<ToastManager.ToastComponent key={toast.id} {...toast} />
				))}
			</>
		);
	};

	public static ToastComponent = (props: IToastProps) => {
		const onChange = (open: boolean) => {
			if (!open) {
				ToastManager.remove(props.id);
			}
		};

		return (
			<Toast.Root className='ToastRoot' duration={ToastManager.TIMEOUT} type={props.type} onOpenChange={onChange}>
				{props.title && <Toast.Title className='ToastTitle'>{props.title}</Toast.Title>}
				<Toast.Description className='ToastDescription'>{props.text}</Toast.Description>
				<Toast.Close className='ToastAction'>X</Toast.Close>
			</Toast.Root>
		);
	};
}
