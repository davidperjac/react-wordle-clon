import { useSelector, useDispatch } from 'react-redux';
import { words } from '../constants/words';

export const useWords = () => {
	const dispatch = useDispatch();
	const guessWord = useSelector((state) => state.guessWord);
	const isShort = guessWord.length < 5;
	const isNotDictionary = !words.includes(guessWord);
	const gridWords = useSelector((state) => state.gridWords);
	const searchWord = useSelector((state) => state.searchWord);

	return {
		dispatch,
		guessWord,
		isShort,
		isNotDictionary,
		gridWords,
		searchWord,
	};
};
