
let getInlink = function functionName() {
	let referrer, metas;

	referrer = document.referrer;
	if (!referrer) {
		console.log('No referrer');
		return;
	}

	meta =  document.querySelectorAll("meta[name=referrer]");
	console.log(meta);
	if (meta) {
		meta = meta[meta.length - 1];
		switch (meta.content) {
			case 'origin':
				// Truncate
				console.log('origin');
				break;
			case 'unsafe-URL':
				// As is
				console.log('Unsafe-URL');
				break;
			default:
				console.log('other state');
				// Other state
				return;
		}

		data = {
			currentPage: location.href,
			previousPage: referrer
		};
		send('inlinks', data);
	}
	else {
		return;
	}
};
//
window.setTimeout(getInlink, 1000);
