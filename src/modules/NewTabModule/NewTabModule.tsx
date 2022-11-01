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

const NewTabModule = () => {
	const clickEvent = async (e: MouseEvent) => {
		const target = e.currentTarget as HTMLElement;
		const id = target?.getAttribute('data-id');
		if (!id) return;
		const event = await OurPraise.getEvent(id, true);
		if (!event) return;
		const title = target?.querySelector('.evTitle')?.innerHTML;
		if (!title) return;
		console.log(event);

		const tabId = `tab.ourpraise.${id}`;
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
	};

	const [orgEvents, setOrgEvents] = useState<{ name: string; events: IOurPraiseEvent[] }[]>([]);

	useEffect(() => {
		const handleEventsData = (data: IOurPraiseEvent[]) => {
			const map = data.reduce<Record<string, IOurPraiseEvent[]>>((map, e) => {
				(map[e.organisationName] = map[e.organisationName] || []).push(e);
				return map;
			}, {});

			const orgEvents = Object.values(map).map(events => {
				const first = events[0];

				return {
					events: events.slice(0, 5),
					name: first.organisationName,
				};
			});

			orgEvents.sort((a, b) => a.name.localeCompare(b.name));

			setOrgEvents(orgEvents);
		};

		const cached = Cache.get<IOurPraiseEvent[]>('OurPraise.events');
		if (cached) handleEventsData(cached);

		OurPraise.getAllEvents().then(handleEventsData);
	}, []);

	return (
		<div class='page NewTab'>
			<div class='title'>OurPresenter</div>
			{/* <div class='groups'>
				<div class='group' onClick={newSetListTab}>
					<div class='logo'>
						<Music />
					</div>
					<div class='groupName'>OurPraise</div>
					<div class='button'>Find setlister fra OurPraise</div>
				</div>
			</div> */}
			<div class='events'>
				{orgEvents.map(org => (
					<div key={org.name} class='org'>
						<div class='orgName'>{org.name}</div>
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
