import { getLetterColor } from '../utils/getLetterColor';
import { getDayOfYear } from '../utils/getDayOfYear';

export const sharedText = (win, words, searchWord) => {
	let text = `REACDLE ${getDayOfYear()} ${win ? words.length : 'X'}/6 \n \n`;
	let colors = '';

	for (let word of words) {
		for (let i = 0; i < word.length; i++) {
			colors += getLetterColor(word.charAt(i), searchWord, i);
		}
		colors += '\n';
	}
	text += colors;

	return text;
};
