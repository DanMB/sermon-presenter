import { useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

function PWA() {
	// replaced dyanmicaly
	const reloadSW = '__RELOAD_SW__';

	const {
		offlineReady: [offlineReady],
		needRefresh: [needRefresh],
		updateServiceWorker,
	} = useRegisterSW({
		onRegistered(r) {
			// @ts-expect-error just ignore
			if (reloadSW === 'true') {
				if (r) {
					console.log('Checking for sw update');
					r.update();
				}
			} else {
				console.log('SW Registered: ' + r);
			}
		},
		onRegisterError(error) {
			console.log('SW registration error', error);
		},
	});

	useEffect(() => {
		if (!offlineReady || needRefresh) {
			updateServiceWorker(true);
		}
	}, [offlineReady, needRefresh]);

	return <></>;
}

export default PWA;
