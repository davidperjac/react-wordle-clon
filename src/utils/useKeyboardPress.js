import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import keys from '../constants/keys';
import { addLetter, sendWord } from '../redux/actions/index';

export const useKeyboardPress = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		window.addEventListener('keydown', (event) => {
			const letter = event.key.toUpperCase();
			for (let row of keys) {
				if (row.includes(letter)) {
					if (letter === 'ENTER') {
						dispatch(sendWord());
					} else {
						dispatch(addLetter(letter));
					}
				}
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);
};
