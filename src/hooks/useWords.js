import { useSelector, useDispatch } from 'react-redux';
import { words } from '../constants/words';

export const useWords = () => {
	const letterColors = useSelector((state) => state.letterColors.letterColors);
	const searchWord = useSelector((state) => state.words.searchWord);
	const gridWords = useSelector((state) => state.words.gridWords);
	const guessWord = useSelector((state) => state.words.guessWord);
	const isNotDictionary = !words.includes(guessWord);
	const win = gridWords.includes(searchWord);
	const isShort = guessWord.length < 5;
	const dispatch = useDispatch();

	return {
		dispatch,
		guessWord,
		isShort,
		isNotDictionary,
		gridWords,
		searchWord,
		letterColors,
		win,
	};
};
