import CustomURI, { UriString } from '@src/types/CustomURI';
import ITabData from '@src/types/ITabData';
import Store from '@src/types/Store';
import CustomMap from '@src/types/CustomMap';
import { newtabUri, UriParts } from '@src/types/URIParts';
import Storage from './Storage';
import PresentWindow, { DefaultPresentingState, Events, IPresenterOptions, IPresenterProps } from './PresentWindow';
import Client from './Client';
import TabStore from './TabStore';

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
					if (!this.presentWindow) this.presentWindow = new PresentWindow(get().options);

					set({
						isPresenting,
					});
				} else {
					if (this.presentWindow) {
						this.presentWindow?.destroy();
						this.presentWindow = null;
					}

					set({
						isPresenting,
						presenting: undefined,
					});
				}
			},
			setPresenting: presenting => {
				const uri = presenting ? new CustomURI(presenting) : undefined;
				if (this.presentWindow) {
					const tab = uri ? TabStore.getTab(uri.limit(UriParts.ID)?.toString() ?? '') : undefined;
					const song = uri && tab ? tab.songs.find(s => s.id === uri.parts[UriParts.SONG]) : null;
					const slide = uri && song ? song.slides[uri.parts[UriParts.SLIDE] as unknown as number] : null;
					console.log({
						uri: presenting,
						data: slide,
					});
					Client.broadcast(Events.SET, {
						uri: presenting,
						data: slide,
					});
				} else if (presenting) {
					this.presentWindow = new PresentWindow({ uri: presenting, ...get().options });
				}

				set({
					presenting: uri,
				});
			},
			setPresenterOptions: options => {
				const newOptions: IPresenterOptions = {
					...get().options,
					...options,
				};

				if (this.presentWindow) {
					Client.broadcast(Events.STYLE, newOptions);
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
