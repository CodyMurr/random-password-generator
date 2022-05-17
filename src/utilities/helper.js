export function capitalize(str) {
	return str.slice(0, 1)[0].toUpperCase().concat(str.slice(1));
}

export function copyPW(val, cb) {
	try {
		navigator.clipboard.writeText(val);
		cb({
			text: val,
			result: 'Copied!',
		});
	} catch (err) {
		cb({
			result: 'Copy Failed',
		});
	}
}
