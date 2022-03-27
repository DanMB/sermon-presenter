import { h } from 'preact';
import './PowerpointGroup.scss';

import { useContext, useEffect, useState } from 'preact/hooks';
import Plus from '../../components/icons/Plus';

import { StoreContext } from '../../ts/store';
import main from '../../ts/window';
import IGroupData, { GroupTypes } from '../../../types/IGroupData';
import ISlideData from '../../../types/ISlideData';

const digitExp = /^Digit\d+$/i;

const PowerpointGroup = ({ data, isActive = false }: { data: IGroupData; isActive?: boolean }) => {
	const { state, dispatch } = useContext(StoreContext);

	const [nextSlide, setNextSlide] = useState(null as ISlideData);

	const keyDown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowRight') {
			let current = data.activeSlide + 1;
			if (current > data.slides.length) current = 0;
		} else if (e.key === 'ArrowLeft') {
			let current = data.activeSlide - 1;
			if (current < 0) current = data.slides.length;
		} else if (digitExp.test(e.code)) {
			let index = parseInt(e.key) - 1;
			if (index === -1) index = 9;
			if (e.shiftKey) index = +10;
			let slide = data.slides[index];
			if (!slide) return;
			// dispatch({
			// 	type: 'viewGroup',
			// 	value: slide.number,
			// });
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', keyDown);

		// main.send('function:start', {
		// 	file: data.file,
		// 	slide: 0,
		// });

		return function () {
			document.removeEventListener('keydown', keyDown);
		};
	}, []);

	const presentingGroup = state.groups.find(g => g.id === state.activeSlide?.group?.id);

	return (
		<div class='PowerpointGroup' key={`grp${data.id}`} data-type={data.type}>
			<div class='presenter'>
				<div class='current' data-type={presentingGroup ? presentingGroup.type : null}>
					<div class='slide'>
						<div
							class='preview'
							style={{
								backgroundImage:
									presentingGroup && presentingGroup.thumbnail ? `url(${presentingGroup.thumbnail})` : null,
							}}
						>
							{state.activeSlide && state.activeSlide.image ? (
								<></>
							) : (
								<div class='textContent'>
									<div class='inner'>{state.activeSlide?.content}</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div class='next' data-type={presentingGroup ? presentingGroup.type : null}>
					<div class='slide'>
						<div class='preview'></div>
					</div>
				</div>
			</div>
			<div class='slides'>
				{data.slides.map(slide => {
					let key = slide.number;
					let shift = false;
					if (key > 10) {
						shift = true;
						key -= 10;
					}
					if (key === 10) key = 0;

					return (
						<div
							key={`${data.id}_sld${slide.number}`}
							id={`${slide.number}`}
							class={`slide ${data.activeSlide === slide.number ? (isActive ? 'active' : 'subActive') : ''}`}
							onClick={() => {
								main.send('function:start', {
									file: data.file,
									slide: slide.number,
								});
							}}
						>
							<div class='hotkey'>
								{shift ? <li></li> : <></>}
								{key}
							</div>
							<div
								class='preview'
								style={{
									backgroundImage: data.thumbnail ? `url(${data.thumbnail})` : null,
								}}
							>
								{slide.image ? (
									<></>
								) : (
									<div class='textContent'>
										<div class='inner'>{slide.content}</div>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PowerpointGroup;
