import { useSelector, useDispatch } from 'react-redux';
import { words } from '../constants/words';

export const useWords = () => {
	const dispatch = useDispatch();
	const gridWords = useSelector((state) => state.gridWords.gridWords);
	const guessWord = useSelector((state) => state.guessWord.guessWord);
	const searchWord = useSelector((state) => state.searchWord.searchWord);
	const isShort = guessWord.length < 5;
	const isNotDictionary = !words.includes(guessWord);

	return {
		dispatch,
		guessWord,
		isShort,
		isNotDictionary,
		gridWords,
		searchWord,
	};
};
