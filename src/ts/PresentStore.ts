import CustomURI, { UriString } from '@src/types/CustomURI';
import ITabData from '@src/types/ITabData';
import Store from '@src/types/Store';
import CustomMap from '@src/types/CustomMap';
import { newtabUri, UriParts } from '@src/types/URIParts';
import Storage from './Storage';
import TabStore from './TabStore';
import ChildWindow, { Events } from './ChildWindow';
import PresentWindow from './PresentWindow';

export interface IPresenterOptions {
	scale: number;
	font: string;
	background: string;
	text: string;
}

export const DefaultPresentingState: IPresenterOptions = {
	scale: 1,
	font: "'Open Sans', Roboto, Arial, sans-serif",
	background: '#000',
	text: '#fff',
};

export interface IPresentState {
	isPresenting: boolean;
	presenting?: CustomURI;
	options: IPresenterOptions;

	setIsPresenting: (isPresenting: boolean) => void;
	setPresenting: (presenting?: UriString) => void;
	setPresenterOptions: (options: Partial<IPresenterOptions>) => void;
}

export class Presenter extends Store<IPresentState> {
	private window: PresentWindow | null = null;

	constructor() {
		const options: IPresenterOptions = Storage.get('presenterOptions') || DefaultPresentingState;

		super((set, get) => ({
			isPresenting: false,
			presenting: undefined,
			options,

			setIsPresenting: isPresenting => {
				if (isPresenting) {
					if (!this.window) {
						this.window = new PresentWindow();
					}

					set({
						isPresenting,
					});
				} else {
					if (this.window) {
						this.window?.close();
						this.window = null;
					}

					set({
						isPresenting,
						presenting: undefined,
					});
				}
			},
			setPresenting: presenting => {
				const uri = presenting ? new CustomURI(presenting) : undefined;
				if (this.window) {
					const tab = uri ? TabStore.getTab(uri.limit(UriParts.ID)?.toString() ?? '') : undefined;
					const song = uri && tab ? tab.songs.find(s => s.id === uri.parts[UriParts.SONG]) : null;
					const slide = uri && song ? song.slides[uri.parts[UriParts.SLIDE] as unknown as number] : null;
					console.log({
						uri: presenting,
						data: slide,
					});
					this.window.set(slide);
				} else if (presenting) {
					this.window = new PresentWindow();
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

				if (this.window) {
					this.window.style(newOptions);
				}

				Storage.set('presenterOptions', newOptions);

				set({
					options: newOptions,
				});
			},
		}));
	}
}

const PresentStore = new Presenter();

export const usePresent = PresentStore.use;

export default PresentStore;
