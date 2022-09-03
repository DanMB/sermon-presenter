import { h } from 'preact';
import './NewTabModule.scss';

import { useContext, useEffect, useState } from 'preact/hooks';

import Music from '@src/components/icons/Music';
import Tabs from '@src/ts/tabs/Tabs';
import { TabType } from '@src/types/URIParts';
import ISongData from '@src/types/ISongData';
import Client from '@src/ts/Client';
import OurPraise, { ISetList, IOrganisation } from '@src/ts/OurPraise';
import Tab, { TabTypes } from '@src/ts/tabs/Tab';

const NewTabModule = () => {
	const newSetListTab = async () => {};

	const clickEvent = async (e: MouseEvent) => {
		const id = (e.currentTarget as HTMLElement)?.getAttribute('data-id');
		if (!id) return;
		const event = await OurPraise.get()?.event(id, true);
		if (!event) return;
		console.log(event);

		const tabId = `tab.ourpraise.${event.id}`;
		Tabs.map.set(
			tabId,
			new Tab({
				id: `tab.ourpraise.${event.id}`,
				title: event.title,
				data: event,
				type: TabTypes.SETLIST,
				active: '',
			})
		);
		Tabs.set({
			tabs: [...Tabs.get().tabs, tabId],
		});
	};

	const [orgEvents, setOrgEvents] = useState<{ id: string; name: string; events: ISetList<string>[] }[]>([]);

	useEffect(() => {
		OurPraise.get()
			?.events(true)
			.then(data => {
				const map = data.reduce<Record<string, ISetList<string>[]>>((map, e) => {
					(map[e.organisation] = map[e.organisation] || []).push(e);
					return map;
				}, {});

				setOrgEvents(
					Object.values(map).map(events => {
						const first = events[0];

						return {
							events,
							id: first.organisation,
							name: first.organisationName,
						};
					})
				);
			});
	}, []);

	return (
		<div class='page NewTab'>
			<div class='title'>SERMON</div>
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
					<div key={org.id} class='org' data-id={org.id}>
						<div class='orgName'>{org.name}</div>
						{org.events.map(event => (
							<div class='event' key={event.id} data-id={event.id} onClick={clickEvent}>
								<span class='evTitle'>{event.title}</span>
								<span class='evDate'>{event.date}</span>
								<span class='evLength'>{event.songs.length}</span>
							</div>
						))}
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
