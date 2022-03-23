export const getCardColor = (letter, word, col, dark = false) => {
	if (letter !== undefined) {
		if (word.indexOf(letter) === col) {
			return '#6ba964';
		} else if (word.includes(letter)) {
			return '#c8b458';
		}
		return '#495057';
	}
};
