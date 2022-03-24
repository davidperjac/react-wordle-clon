export const getCardColor = (letter, word, col, lastWord) => {
	if (letter !== undefined) {
		if (col !== -1 && word.indexOf(letter) === col) {
			return '#6ba964';
		} else if (word.includes(letter)) {
			return '#c8b458';
		}
		return '#495057';
	}
};
