export const getCardColor = (letter, word, col) => {
	const indexes = [...word.matchAll(new RegExp(letter, 'gi'))].map(
		(a) => a.index
	);

	if (letter !== undefined) {
		if (col !== -1 && indexes.includes(col)) {
			return '#6ba964';
		} else if (word.includes(letter)) {
			return '#c8b458';
		}
		return '#495057';
	}
};
