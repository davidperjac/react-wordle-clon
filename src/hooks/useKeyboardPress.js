import { useLocalStorage } from './useLocalStorage';
import { checkKey } from '../utils/checkKey';
import { useState, useEffect } from 'react';

export const useKeyboardPress = () => {
	const [key, setKey] = useState('');
	const [play] = useLocalStorage('PLAY', '');

	useEffect(() => {
		window.addEventListener('keydown', (event) => {
			const letter = event.key.toUpperCase();
			if (checkKey(letter) && play) {
				setKey(letter);
			}
		});
	}, [play]);
	return { key, setKey };
};
