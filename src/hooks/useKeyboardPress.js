import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkKey } from '../utils/checkKey';

export const useKeyboardPress = () => {
	const [key, setKey] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		window.addEventListener('keydown', (event) => {
			const letter = event.key.toUpperCase();
			if (checkKey(letter)) {
				setKey(letter);
			}
		});
	}, [dispatch]);
	return { key, setKey };
};
