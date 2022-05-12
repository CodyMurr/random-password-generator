const letters = 'abcdefghijklmnopqrstuvwxyz';

export const charObj = {
	lowercase: letters.split(''),
	uppercase: letters.toUpperCase().split(''),
	numbers: '0123456789'.split(''),
	symbols: '!@#$%^&*()_-+=[]|{}?,.'.split(''),
};

export function generate(arr, len) {
	const passArr = [];
	while (passArr.length <= len) {
		let randomArr = Math.floor(Math.random() * arr.length);
		let randomChar = Math.floor(
			Math.random() * arr[randomArr].length,
		);
		passArr.push(arr[randomArr][randomChar]);
	}
	return passArr.join('');
}
