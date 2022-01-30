import { h, createContext, VNode } from 'preact';
import { useReducer, useContext } from 'preact/hooks';

export default class ContextStore {
	public ct: preact.Context<any>;
	public defaultState: any;

	private reducerNames: string[];
	private reducerFunctions: any[];

	constructor(defaultState: any, reducers: any) {
		this.defaultState = defaultState;

		this.ct = createContext({
			state: defaultState, // Your default state.
			dispatch: (action: { type: string; value: any }) => {},
		});

		this.reducerNames = Object.keys(reducers);
		this.reducerFunctions = Object.values(reducers);
	}

	public reducer = (state: any, action: { type: string; value: any }) => {
		var index = this.reducerNames.indexOf(action.type);
		if (index >= 0) {
			return this.reducerFunctions[index](state, action.value as never);
		} else {
			throw new Error(`Unknown Action: ${action.type}`);
		}
	};

	public StoreProvider({ children }: { children: preact.ComponentChildren }): VNode<any> {
		const [state, dispatch] = useReducer(this.reducer, this.defaultState);
		const store = { state, dispatch };
		return <this.ct.Provider value={store}>{children}</this.ct.Provider>;
	}

	public useStore(): any {
		const context = useContext(this.ct);
		if (context === undefined) {
			throw new Error('useCount must be used within a CountProvider');
		}
		return context;
	}
}
