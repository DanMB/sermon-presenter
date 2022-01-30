import AdmZip from 'adm-zip';
import xml2js from 'xml2js';
import path from 'path';
import IGroupData, { GroupTypes } from '../types/IGroupData';
import ISlideData from '../types/ISlideData';

const getPowerpointData = (file: string): IGroupData => {
	var zip = new AdmZip(file);
	var zipEntries = zip.getEntries();
	let name = path.basename(file);

	var data: IGroupData = {
		type: GroupTypes.POWERPOINT,
		activeSlide: 0,
		name: name,
		file: file,
		id: Buffer.from(name).toString('base64'),
		slides: [],
	};

	var slidesExp = /^ppt\/slides\/slide(\d+)\.xml$/;
	var textExp = /<a:t>([^<]*)<\/a:t>/gi;
	var slides: Array<ISlideData> = [];
	var length = -1;

	zipEntries.forEach(zipEntry => {
		if (zipEntry.entryName == 'docProps/app.xml') {
			var zipData = zipEntry.getData().toString('utf8');
			xml2js.parseString(zipData, (err, result) => {
				if (result?.Properties?.Slides) {
					length = parseInt(result?.Properties?.Slides[0]);
				}
			});
		} else if (zipEntry.entryName == 'docProps/thumbnail.jpeg') {
			var zipData = zipEntry.getData().toString('base64');
			data = {
				...data,
				thumbnail: `data:text/plain;base64,${zipData}`,
			};
		} else {
			let slideName = slidesExp.exec(zipEntry.entryName);

			if (slideName) {
				var zipData = zipEntry.getData().toString('utf8');
				var matches = [...zipData.matchAll(textExp)];
				slides.push({
					number: parseInt(slideName[1]),
					content: matches ? matches.map(m => m[1]).join('\n') : '',
					group: {
						type: data.type,
						name: data.name,
						id: data.id,
					},
				});
			}
		}
	});

	slides.sort((a, b) => a.number - b.number);

	if (length > -1 && length !== slides.length) {
		var properSlides: Array<ISlideData> = [];
		for (let i = 1; i <= length; i++) {
			properSlides.push(
				slides.find(s => s.number == i) || {
					number: i,
					content: '',
					group: {
						type: data.type,
						name: data.name,
						id: data.id,
					},
				}
			);
		}

		data.slides = properSlides;
	} else {
		data.slides = slides;
	}

	data.activeSlide = data.slides[0] ? data.slides[0].number : 0;

	return data;
};

export default getPowerpointData;
