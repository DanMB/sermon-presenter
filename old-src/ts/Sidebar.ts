import Store from '@src/types/Store';

export interface ISidebarState {
	sidebarWidth: number;
	sidebar: string | null;
}

export const DefaultSidebar = {
	sidebarWidth: 200,
	sidebar: null,
};

export class SidebarStore extends Store<ISidebarState> {
	constructor() {
		super(DefaultSidebar, {
			id: 'settings',
		});
	}

	public openMusic = () => {
		this.set({
			sidebar: 'music',
		});
	};

	public openSettings = () => {
		this.set({
			sidebar: 'settings',
		});
	};

	public close = () => {
		this.set({
			sidebar: null,
		});
	};
}

const Sidebar = new SidebarStore();

export default Sidebar;
