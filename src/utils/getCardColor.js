const getIndexes = (word, letter) =>
	[...word.matchAll(new RegExp(letter, 'gi'))].map((a) => a.index);

export const getCardColor = (letter, word, col, darkMode, used) => {
	const indexes = getIndexes(word, letter);

	if (letter !== undefined ) {
		if (col !== -1 && indexes.includes(col)) {
			return '#6ba964';
		} else if (word.includes(letter)) {
			return '#c8b458';
		}
		return darkMode ? '#2C2E33' : '#868E96';
	}
};
