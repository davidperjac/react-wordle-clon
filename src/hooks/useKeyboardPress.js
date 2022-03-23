import { useState, useEffect } from 'react';
import { checkKey } from '../utils/checkKey';

export const useKeyboardPress = () => {
	const [key, setKey] = useState('');

	useEffect(() => {
		window.addEventListener('keydown', (event) => {
			const letter = event.key.toUpperCase();
			if (checkKey(letter)) {
				setKey(letter);
			}
		});
	}, []);
	return { key, setKey };
};
