import keys from '../constants/keys';

export const checkKey = (letter) => {
	for (let row of keys) {
		if (row.includes(letter)) {
			return true;
		}
	}
	return false;
};
