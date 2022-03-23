import { addLetter, sendWord, setError } from '../redux/actions';
import { useEffect } from 'react';

export const useSubmit = (key, setKey, dispatch, isShort, isNotDictionary) => {
	useEffect(() => {
		if (key === 'ENTER') {
			if (isShort) {
				dispatch(setError('Not Enough Letters!!'));
			} else if (isNotDictionary) {
				dispatch(setError('Not In Word List!!'));
			} else {
				dispatch(sendWord());
			}
		} else {
			dispatch(addLetter(key === '⌫' ? 'BACKSPACE' : key));
		}
		return () => {
			setKey('');
		};
	}, [dispatch, setKey, key, isShort, isNotDictionary]);
};
