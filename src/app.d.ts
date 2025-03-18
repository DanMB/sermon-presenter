// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {
		// 	errorId?: string;
		// }
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		__TAURI__: undefined | unknown;
		__VERSION__: undefined | string;
	}
}

export {};
