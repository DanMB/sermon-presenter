import { h } from 'preact';

import Tabs from '@src/ts/tabs/Tabs';
import Tab from '@src/ts/tabs/Tab';
import SetListModule from '../SetListModule/SetListModule';
import PdfSlidesModule from '../PdfSlidesModule/PdfSlidesModule';

const TabModule = ({ id }: { id: string }) => {
	const tab = Tabs.getTab(id);
	if (!tab) return null;

	if (Tab.isSetList(tab)) {
		return <SetListModule tab={tab} />;
	} else if (Tab.isPdf(tab)) {
		return <PdfSlidesModule tab={tab} />;
	} else {
		return null;
	}
};

export default TabModule;
