import { h } from 'preact';
import './NewTabModule.scss';

import { useContext, useEffect, useState } from 'preact/hooks';

import Music from '@src/components/icons/Music';
import TabStore from '@src/ts/TabStore';
import CustomURI from '@src/types/CustomURI';
import { TabType } from '@src/types/URIParts';
import ISongData from '@src/types/ISongData';
import Client from '@src/ts/Client';
import OurPraise, { IEvent, IOrganisation } from '@src/ts/OurPraise';

const NewTabModule = () => {
	const newSetListTab = async () => {
		const id = Date.now().toString(36).toUpperCase();
		const uri = new CustomURI([TabType.SETLIST, id]).toString();

		const songs: ISongData[] = [
			{
				id: id + '-1',
				name: 'Hallelujah 1',
				slides: [
					{
						text: `I heard there was a secret chord
						That David played and it pleased the lord
						But you don't really care for music, do you?
						Well it goes like this the fourth, the fifth
						The minor fall and the major lift
						The baffled king composing hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Well, your faith was strong but you needed proof
						You saw her bathing on the roof
						Her beauty and the moonlight overthrew you
						She tied you to her kitchen chair
						She broke your throne and she cut your hair
						And from your lips she drew the hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Baby, I've been here before
						I've seen this room and I've walked this floor
						I used to live alone before I knew you
						I've seen your flag on the marble arch
						But love is not a victory march
						It's a cold and it's a broken hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Well, there was a time when you let me know
						What's really going on below
						But now you never show that to me do you
						But remember when I moved in you
						And the holy dove was moving too
						And every breath we drew was hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Well, maybe there's a god above
						But all I've ever learned from love
						Was how to shoot somebody who outdrew you
						It's not a cry that you hear at night
						It's not somebody who's seen the light
						It's a cold and it's a broken hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u ....
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u ....
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....
									Halleluuuuuuujah`,
					},
				],
			},
			{
				id: id + '-2',
				name: 'Hallelujah 2',
				slides: [
					{
						text: `I heard there was a secret chord
						That David played and it pleased the lord
						But you don't really care for music, do you?
						Well it goes like this the fourth, the fifth
						The minor fall and the major lift
						The baffled king composing hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Well, your faith was strong but you needed proof
						You saw her bathing on the roof
						Her beauty and the moonlight overthrew you
						She tied you to her kitchen chair
						She broke your throne and she cut your hair
						And from your lips she drew the hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Baby, I've been here before
						I've seen this room and I've walked this floor
						I used to live alone before I knew you
						I've seen your flag on the marble arch
						But love is not a victory march
						It's a cold and it's a broken hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Well, there was a time when you let me know
						What's really going on below
						But now you never show that to me do you
						But remember when I moved in you
						And the holy dove was moving too
						And every breath we drew was hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Well, maybe there's a god above
						But all I've ever learned from love
						Was how to shoot somebody who outdrew you
						It's not a cry that you hear at night
						It's not somebody who's seen the light
						It's a cold and it's a broken hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u ....
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u ....
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....
									Halleluuuuuuujah`,
					},
				],
			},
			{
				id: id + '-3',
				name: 'Hallelujah 3',
				slides: [
					{
						text: `I heard there was a secret chord
						That David played and it pleased the lord
						But you don't really care for music, do you?
						Well it goes like this the fourth, the fifth
						The minor fall and the major lift
						The baffled king composing hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Well, your faith was strong but you needed proof
						You saw her bathing on the roof
						Her beauty and the moonlight overthrew you
						She tied you to her kitchen chair
						She broke your throne and she cut your hair
						And from your lips she drew the hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Baby, I've been here before
						I've seen this room and I've walked this floor
						I used to live alone before I knew you
						I've seen your flag on the marble arch
						But love is not a victory march
						It's a cold and it's a broken hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Well, there was a time when you let me know
						What's really going on below
						But now you never show that to me do you
						But remember when I moved in you
						And the holy dove was moving too
						And every breath we drew was hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....`,
					},
					{
						text: `Well, maybe there's a god above
						But all I've ever learned from love
						Was how to shoot somebody who outdrew you
						It's not a cry that you hear at night
						It's not somebody who's seen the light
						It's a cold and it's a broken hallelujah
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u ....
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u ....
						Hallelujah, hallelujah, hallelujah, hallelu-u-u-u-jah ....
									Halleluuuuuuujah`,
					},
				],
			},
		];

		// TabStore.setTab({
		// 	id,
		// 	uri,
		// 	songs,
		// 	name: 'Test setlist',
		// 	activeSong: songs[0] ? songs[0].id : undefined,
		// 	activeSlide: 0,
		// });
	};

	const clickEvent = async (e: MouseEvent) => {
		const id = (e.currentTarget as HTMLElement)?.getAttribute('data-id');
		if (!id) return;
		const event = await OurPraise.get()?.event(id, true);
		console.log(event);
	};

	const [orgEvents, setOrgEvents] = useState<{ id: string; name: string; events: IEvent<string>[] }[]>([]);

	useEffect(() => {
		OurPraise.get()
			?.events(true)
			.then(data => {
				const map = data.reduce<Record<string, IEvent<string>[]>>((map, e) => {
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
