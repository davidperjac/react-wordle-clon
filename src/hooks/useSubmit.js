import { addLetter, sendWord, setError } from '../redux/actions';
import { useEffect } from 'react';

export const useSubmit = (
	key,
	setKey,
	dispatch,
	isShort,
	isNotDictionary,
	guessWord
) => {
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
	}, [dispatch, setKey, key, isShort, isNotDictionary, guessWord]);
};
