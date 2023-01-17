import { getDocument, PDFDocumentProxy, GlobalWorkerOptions } from 'pdfjs-dist';
import Storage from './Storage';
import { signal, Signal } from '@preact/signals';

export default class PdfFiles {
	private static loaded = new Map<string, PDFDocumentProxy>();
	private static signals = new Map<string, Signal<PDFDocumentProxy | undefined>>();
	private static workerSet: boolean = false;

	private static setWorker = () => {
		GlobalWorkerOptions.workerSrc =
			'https://localhost:3000/@fs/Users/daniel/web/sermon-presenter/node_modules/pdfjs-dist/build/pdf.worker.js';
		this.workerSet = true;
	};

	public static get = async (key: string): Promise<PDFDocumentProxy | undefined> => {
		const gotten = this.loaded.get(key);

		if (gotten) {
			return gotten;
		}

		const data = Storage.get<string | ArrayBuffer>(key);

		if (data) {
			return this.load(key, data, false);
		}

		return undefined;
	};

	public static load = async (key: string, data: string | ArrayBuffer, store: boolean = true) => {
		if (store) Storage.set(key, data);

		if (!this.workerSet) this.setWorker();

		return getDocument(data)
			.promise.then(pdf => {
				this.loaded.set(key, pdf);
				return pdf;
			})
			.catch(err => {
				console.error(err);
				return undefined;
			});
	};

	public static delete = (key: string) => {
		Storage.remove(key);
		const gotten = this.loaded.get(key);

		if (gotten) {
			gotten.destroy();
			this.loaded.delete(key);
		}
	};

	public static signal = (key: string): Signal<PDFDocumentProxy | undefined> => {
		const gotten = this.signals.get(key);
		if (gotten) return gotten;

		const newSignal = signal<PDFDocumentProxy | undefined>(undefined);

		this.get(key).then(document => {
			newSignal.value = document;
		});

		return newSignal;
	};
}
