import './NewTabModule.scss';

import Tabs from '@src/ts/tabs/Tabs';
import Client from '@src/ts/Client';
import OurPraise from '@src/ts/OurPraise';
import Tab, { TabTypes } from '@src/ts/tabs/Tab';
import Dates from '@src/ts/Dates';
import Cache from '@src/ts/Cache';
import IOurPraiseEvent from '@src/types/IOurPraiseEvent';
import Spinner from '@src/components/icons/Spinner';
import { useState, useEffect, MouseEvent } from 'react';

const NewTabModule = () => {
	const clickEvent = async (e: MouseEvent<HTMLDivElement>) => {
		const target = e.currentTarget;
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
					custom: {},
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
	}, []);

	return (
		<div className='page NewTab'>
			<div className='title'>OurPresenter</div>
			{/* <div className='groups'>
				<div className='group' onClick={newSetListTab}>
					<div className='logo'>
						<Music />
					</div>
					<div className='groupName'>OurPraise</div>
					<div className='button'>Find setlister fra OurPraise</div>
				</div>
			</div> */}
			<div className='events'>
				{orgEvents.map(org => (
					<div key={org.name} className='org'>
						<div className='orgName'>
							<span>{org.name}</span>
							{!org.loading && <Spinner />}
						</div>
						{org.events.map(event => {
							const eventDate = new Date(event.date);
							return (
								<div
									className={`event ${Dates.hasPassed(eventDate) && 'passed'}`}
									key={event.id}
									data-id={event.id}
									onClick={clickEvent}
								>
									<span className='evTitle'>{event.title || 'NULL'}</span>
									<span className='evDate'>{Dates.Full(eventDate)}</span>
									<span className='evLength'>{event.songs}</span>
								</div>
							);
						})}
					</div>
				))}
			</div>
			<div className='footer'>
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
