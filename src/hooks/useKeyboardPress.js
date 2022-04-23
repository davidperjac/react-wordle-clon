import { checkKey } from '../utils/checkKey';
import { useState, useEffect } from 'react';

export const useKeyboardPress = () => {
	const play = JSON.parse(window.localStorage.getItem('PLAY'));
	const [key, setKey] = useState('');

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
