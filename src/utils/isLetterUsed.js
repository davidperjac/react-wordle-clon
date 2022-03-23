export const isLetterUsed = (gridWords, letter) => {
	for (let word of gridWords) {
		if (word.includes(letter)) {
			return true;
		}
	}
	return false;
};
