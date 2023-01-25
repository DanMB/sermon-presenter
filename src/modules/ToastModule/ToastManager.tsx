import * as Toast from '@radix-ui/react-toast';
import create from 'zustand';
import './ToastModule.scss';

export interface IToastProps {
	id: string;
	title?: string;
	text: string;
	theme?: string;
}

export interface IToastState {
	items: IToastProps[];
}

export default class ToastManager {
	public static TIMEOUT = 5000;
	private static _store = create<IToastState>((set, get) => ({
		items: [],
	}));

	public static add = (props: IToastProps) => {
		const items = [...ToastManager._store.getState().items];
		const index = items.findIndex(toast => toast.id === props.id);

		if (index < 0) {
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
		console.log('test');
		const id = new Date().getTime();

		ToastManager.add({
			id: id.toString(),
			text: 'Something toast',
		});
	};

	public static Container = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
		return (
			<Toast.Provider swipeDirection='down' duration={ToastManager.TIMEOUT}>
				<ToastManager.Toasts />
				{children}
				<Toast.Viewport className='ToastViewport' />
			</Toast.Provider>
		);
	};

	public static Toasts = () => {
		const items = ToastManager._store(state => state.items);
		console.log(items);

		return (
			<>
				{items.map(toast => (
					<Toast.Root key={toast.id}>
						{toast.title && <Toast.Title className='ToastTitle'>{toast.title}</Toast.Title>}
						<Toast.Description>{toast.text}</Toast.Description>
						<Toast.Close className='ToastClose'>X</Toast.Close>
					</Toast.Root>
				))}
			</>
		);
	};

	// public static createToast = () => {
	// 	const [open, setOpen] = useState(false);
	// 	const eventDateRef = useRef(new Date());
	// 	const timerRef = useRef(0);

	// 	useEffect(() => {
	// 		return () => clearTimeout(timerRef.current);
	// 	}, []);

	// 	return (
	// 		<Toast.Root className='ToastRoot' open={open} onOpenChange={setOpen}>
	// 			<Toast.Title className='ToastTitle'>Scheduled: Catch up</Toast.Title>
	// 			<Toast.Description asChild>
	// 				<time className='ToastDescription' dateTime={eventDateRef.current.toISOString()}>
	// 					{prettyDate(eventDateRef.current)}
	// 				</time>
	// 			</Toast.Description>
	// 			<Toast.Close className='ToastClose'>X</Toast.Close>
	// 		</Toast.Root>
	// 	);
	// };
}

// export interface IToastProps {}
// export interface IToastState {}

// export class ToastInstance {
// 	private _store: UseBoundStore<StoreApi<IToastState>>;

// 	constructor(props:IToastProps) {
// 		ToastManager._store = create<IToastState>(() => {
// 			isOpen: true,
// 			setIsOpen
// 		});
// 	}

// 	public Component() {
// 		return (<Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
//         <Toast.Title className="ToastTitle">Scheduled: Catch up</Toast.Title>
//         <Toast.Description asChild>
//           <time className="ToastDescription" dateTime={eventDateRef.current.toISOString()}>
//             {prettyDate(eventDateRef.current)}
//           </time>
//         </Toast.Description>
//         <Toast.Action className="ToastAction" asChild altText="Goto schedule to undo">
//           <button className="Button small green">Undo</button>
//         </Toast.Action>
//       </Toast.Root>);
// 	}
// }
