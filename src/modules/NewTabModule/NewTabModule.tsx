import { h } from 'preact';
import './NewTabModule.scss';

import { useEffect, useState } from 'preact/hooks';

import Tabs from '@src/ts/tabs/Tabs';
import Client from '@src/ts/Client';
import OurPraise from '@src/ts/OurPraise';
import Tab, { TabTypes } from '@src/ts/tabs/Tab';
import Dates from '@src/ts/Dates';
import Cache from '@src/ts/Cache';
import IOurPraiseEvent from '@src/types/IOurPraiseEvent';
import Spinner from '@src/components/icons/Spinner';
import Powerpoint from '@src/components/icons/Powerpoint';
import FileInput, { IFileData } from '@src/components/Input/FileInput';
import { slug } from '@src/utils/textUtils';
import * as pdfjs from 'pdfjs-dist';
import { IPdfSlide } from '@src/types/IPdfSlides';

const NewTabModule = () => {
	const clickEvent = async (e: MouseEvent) => {
		const target = e.currentTarget as HTMLElement;
		const id = target?.getAttribute('data-id');
		if (!id) return;
		const event = await OurPraise.getEvent(id, true);
		if (!event) return;
		const title = target?.querySelector('.evTitle')?.innerHTML;
		if (!title) return;

		const tabId = `tab.ourpraise.${id}`;

		if (Tabs.map.has(tabId)) {
			Tabs.set({
				active: tabId,
			});
		} else {
			Tabs.map.set(
				tabId,
				new Tab({
					id: tabId,
					title,
					data: event,
					type: TabTypes.SETLIST,
					active: '',
				})
			);
			Tabs.set({
				tabs: [...Tabs.get().tabs, tabId],
				active: tabId,
			});
		}
	};

	const [orgEvents, setOrgEvents] = useState<{ name: string; loading: boolean; events: IOurPraiseEvent[] }[]>([]);

	useEffect(() => {
		const handleEventsData = (data: IOurPraiseEvent[], loading: boolean = true) => {
			const map = data.reduce<Record<string, IOurPraiseEvent[]>>((map, e) => {
				(map[e.organisationName] = map[e.organisationName] || []).push(e);
				return map;
			}, {});

			const orgEvents = Object.values(map).map(events => {
				const first = events[0];

				return {
					events: events.slice(0, 5),
					loading,
					name: first.organisationName,
				};
			});

			orgEvents.sort((a, b) => a.name.localeCompare(b.name));

			setOrgEvents(orgEvents);
		};

		const cached = Cache.get<IOurPraiseEvent[]>('OurPraise.events');
		if (cached) handleEventsData(cached, false);

		OurPraise.getAllEvents().then(handleEventsData);

		pdfjs.GlobalWorkerOptions.workerSrc =
			'https://localhost:3000/@fs/Users/daniel/web/sermon-presenter/node_modules/pdfjs-dist/build/pdf.worker.js';
	}, []);

	const newPDFSlides = (value: IFileData | null) => {
		if (!value) return;

		// const modified = value.lastModified.toString(36);
		const tabId = `tab.pdf.${slug(value.name)}`;

		console.log('loading', value.data);

		pdfjs
			.getDocument(value.data)
			.promise.then(async pdf => {
				const scale = 1;

				const slides: IPdfSlide[] = [];

				for (let i = 1; i <= pdf.numPages; i++) {
					const page = await pdf.getPage(i).catch(err => {
						console.error(err);
						return null;
					});
					if (!page) continue;
					const content = await page.getTextContent().catch(err => {
						console.error(err);
						return null;
					});

					slides.push({
						index: i,
						text: content ? content.items.join('\n') : '',
						viewport: page.getViewport({ scale }),
						render: page.render,
					});
				}

				Tabs.map.set(
					tabId,
					new Tab({
						id: tabId,
						title: value.name,
						type: TabTypes.PDFSLIDES,
						active: '',
						data: {
							fingerprints: pdf.fingerprints,
							slides,
						},
					})
				);
				Tabs.set({
					tabs: [...Tabs.get().tabs, tabId],
					active: tabId,
				});
			})
			.catch(err => {
				console.error(err);
			});
	};

	return (
		<div class='page NewTab'>
			<div class='title'>OurPresenter</div>
			<div class='groups'>
				<label class='group' for='pdf'>
					<div class='groupName'>
						<Powerpoint />
						<span>Slides</span>
					</div>
					<div class='button'>PDF Presentations</div>
					<FileInput
						label={'PDF Slide'}
						id={'pdf'}
						onChange={newPDFSlides}
						title={'Background'}
						type={'file'}
						acceptFiles={'application/pdf'}
					/>
				</label>
			</div>
			<div class='events'>
				{orgEvents.map(org => (
					<div key={org.name} class='org'>
						<div class='orgName'>
							<span>{org.name}</span>
							{!org.loading && <Spinner />}
						</div>
						{org.events.map(event => {
							const eventDate = new Date(event.date);
							return (
								<div
									class={`event ${Dates.hasPassed(eventDate) && 'passed'}`}
									key={event.id}
									data-id={event.id}
									onClick={clickEvent}
								>
									<span class='evTitle'>{event.title || 'NULL'}</span>
									<span class='evDate'>{Dates.Full(eventDate)}</span>
									<span class='evLength'>{event.songs}</span>
								</div>
							);
						})}
					</div>
				))}
			</div>
			<div class='footer'>
				<span>ver {Client.versions.client}</span>
				{Client.isTau ? (
					<span>
						{Client.versions.tauri} / {Client.versions.app}
					</span>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default NewTabModule;
