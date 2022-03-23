import { useSelector, useDispatch } from 'react-redux';
import { words } from '../constants/words';

export const useCurrentWord = () => {
	const dispatch = useDispatch();
	const guessWord = useSelector((state) => state.guessWord);
	const isShort = guessWord.length < 5;
	const isNotDictionary = !words.includes(guessWord);

	return {
		dispatch,
		guessWord,
		isShort,
		isNotDictionary,
	};
};
