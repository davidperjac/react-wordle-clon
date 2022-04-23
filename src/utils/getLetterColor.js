const getIndexes = (word, letter) =>
	[...word.matchAll(new RegExp(letter, 'gi'))].map((a) => a.index);

export const getLetterColor = (letter, word, col) => {
	const indexes = getIndexes(word, letter);
	if (letter !== undefined) {
		if (indexes.includes(col)) {
			return '🟩';
		} else if (word.includes(letter)) {
			return '🟨';
		}
		return '⬜️';
	}
};
