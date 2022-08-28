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
	presenting?: string;
	options: IPresenterOptions;

	setIsPresenting: (isPresenting: boolean) => void;
	setPresenting: (presenting?: string) => void;
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
				if (this.window) {
					const parts = presenting ? presenting.split('/') : [];
					const tab = parts[0] ? TabStore.getTab(parts[0]) : undefined;
					const song = parts[1] && tab ? tab.data.songs.find(s => s.id === parts[1]) : null;
					const slide = parts[2] && song ? song.slides[parseInt(parts[2])] : null;
					console.log('setPresenting', presenting, true);
					this.window.set(slide);
				} else if (presenting) {
					console.log('setPresenting', presenting, true);
					this.window = new PresentWindow();
				}

				set({
					presenting,
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
