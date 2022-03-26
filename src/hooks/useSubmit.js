import { addLetter, sendWord, setError } from '../redux/actions';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useWords } from '../hooks/useWords';
import { useEffect } from 'react';

export const useSubmit = (key, setKey) => {
	const [victoryWord] = useLocalStorage('VICTORY_WORD');
	const [, setStoredWords] = useLocalStorage('GRID', []);
	const { dispatch, gridWords, isShort, isNotDictionary, guessWord } =
		useWords();

	useEffect(() => {
		if (key !== '') {
			if (key === 'ENTER') {
				if (isShort) {
					dispatch(setError('Not Enough Letters!!'));
				} else if (isNotDictionary) {
					dispatch(setError(guessWord + ' is not In Word List!!'));
				} else {
					dispatch(sendWord());
				}
			} else {
				if (key === 'BACKSPACE' && guessWord !== '') {
					dispatch(addLetter(key === '⌫' ? 'BACKSPACE' : key));
				} else {
					dispatch(addLetter(key));
				}
			}
		}
		return () => {
			setKey('');
		};
	}, [
		dispatch,
		setKey,
		key,
		isShort,
		isNotDictionary,
		guessWord,
		gridWords,
		setStoredWords,
		victoryWord,
	]);
	useEffect(() => {
		setStoredWords(gridWords);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gridWords]);
};
