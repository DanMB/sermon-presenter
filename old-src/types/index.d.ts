export {};

declare global {
	interface Window {
		__TAURI__: undefined | unknown;
		__VERSION__: undefined | string;
	}
}
