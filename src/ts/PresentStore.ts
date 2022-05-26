import CustomURI, { UriString } from '@src/types/CustomURI';
import ITabData from '@src/types/ITabData';
import Store from '@src/types/Store';
import CustomMap from '@src/types/CustomMap';
import { newtabUri } from '@src/types/URIParts';
import Storage from './Storage';
import PresentWindow, { DefaultPresentingState, IPresenterOptions, IPresenterProps } from './PresentWindow';

export interface IPresentState {
	isPresenting: boolean;
	presenting?: CustomURI;
	options: IPresenterOptions;

	setIsPresenting: (isPresenting: boolean) => void;
	setPresenting: (presenting?: UriString) => void;
	setPresenterOptions: (options: Partial<IPresenterOptions>) => void;
}

export class Presenter extends Store<IPresentState> {
	private presentWindow: PresentWindow | null = null;

	constructor(props: IPresenterProps = {}) {
		const { uri, ...options } = props;

		let fullOptions: IPresenterOptions = Storage.get('presenterOptions') || DefaultPresentingState;
		if (options) {
			fullOptions = {
				...fullOptions,
				...options,
			};
		}

		super((set, get) => ({
			isPresenting: !!uri,
			presenting: uri ? new CustomURI(uri) : undefined,
			options: fullOptions,

			setIsPresenting: isPresenting => {
				if (isPresenting) {
					set({
						isPresenting,
					});
				} else {
					set({
						isPresenting,
						presenting: undefined,
					});
				}
			},
			setPresenting: presenting => {
				if (this.presentWindow) {
					this.presentWindow.send('setPresenting', presenting);
				} else if (presenting) {
					this.presentWindow = new PresentWindow({ uri: presenting, ...get().options });
				}

				set({
					presenting: presenting ? new CustomURI(presenting) : undefined,
				});
			},
			setPresenterOptions: options => {
				const newOptions: IPresenterOptions = {
					...get().options,
					...options,
				};

				if (this.presentWindow) {
					this.presentWindow.send('setPresenterOptions', newOptions);
				}

				Storage.set('presenterOptions', newOptions);

				set({
					options: newOptions,
				});
			},
		}));

		if (uri) {
			this.presentWindow = new PresentWindow({ uri, ...fullOptions });
		}
	}
}

const PresentStore = new Presenter();

export const usePresent = PresentStore.use;

export default PresentStore;
