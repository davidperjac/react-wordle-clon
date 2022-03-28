import { useSelector, useDispatch } from 'react-redux';
import { words } from '../constants/words';

export const useWords = () => {
	const dispatch = useDispatch();
	const searchWord = useSelector((state) => state.words.searchWord);
	const gridWords = useSelector((state) => state.words.gridWords);
	const guessWord = useSelector((state) => state.words.guessWord);
	const letterColors = useSelector((state) => state.letterColors.letterColors);
	const isNotDictionary = !words.includes(guessWord);
	const isShort = guessWord.length < 5;

	return {
		dispatch,
		guessWord,
		isShort,
		isNotDictionary,
		gridWords,
		searchWord,
		letterColors,
	};
};
