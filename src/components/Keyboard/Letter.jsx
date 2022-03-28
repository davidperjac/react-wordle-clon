import { addLetter, sendWord, setError } from '../../redux/actions';
import { isLetterUsed } from '../../utils/isLetterUsed';
import { useWords } from '../../hooks/useWords';
import { useTheme } from '../../hooks/useTheme';
import { useMediaQuery } from '@mantine/hooks';
import { Center, Title } from '@mantine/core';
import { useEffect, useState } from 'react';

const Letter = ({ letter }) => {
	const {
		dispatch,
		isShort,
		isNotDictionary,
		gridWords,
		guessWord,
		letterColors,
	} = useWords();
	const isMobile = useMediaQuery('(max-width: 768px)');
	const used = isLetterUsed(gridWords, letter);
	const [color, setColor] = useState('');
	const hasColor = used && color !== '';
	const { dark } = useTheme();

	/* ADD LETTER AND SUBMIT HANDLER */

	const handleClick = () => {
		if (letter === '⏎') {
			if (isShort) {
				dispatch(setError('Not Enough Letters!!'));
			} else if (isNotDictionary) {
				dispatch(setError('Not In Word List!!'));
			} else {
				dispatch(sendWord());
			}
		} else {
			if (letter === '⌫' && guessWord !== '') {
				dispatch(addLetter('BACKSPACE'));
			}
			if (letter !== '⌫' && guessWord.length !== 5) {
				dispatch(addLetter(letter));
			}
		}
	};

	/* KEYBOARD COLOR ANIMATION */

	useEffect(() => {
		for (let letterColor of letterColors) {
			if (letterColor.letter === letter) {
				setColor(letterColor.color);
				if (letterColor.color === '#868E96' && dark) {
					setColor('#2C2E33');
				}
			}
		}
	}, [letter, letterColors, dark]);

	const backgroundColor = (theme) =>
		used ? color : dark ? '#5C5F66' : theme.colors.gray[3];

	const letterStyle = (theme) => ({
		color: dark || hasColor ? 'white' : 'black',
		backgroundColor: backgroundColor(theme),
		width: isMobile ? 37 : 45,
		borderRadius: '10px',
		cursor: 'pointer',
		height: 50,
	});

	return (
		<Center sx={letterStyle} onClick={handleClick}>
			<Title order={5}>{letter}</Title>
		</Center>
	);
};

export default Letter;
