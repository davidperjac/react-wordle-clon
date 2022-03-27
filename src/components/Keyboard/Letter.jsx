import { addLetter, sendWord, setError } from '../../redux/actions';
import { isLetterUsed } from '../../utils/isLetterUsed';
import { getCardColor } from '../../utils/getCardColor';
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
		searchWord,
		guessWord,
	} = useWords();
	const { dark } = useTheme();
	const used = isLetterUsed(gridWords, letter);
	const lastWord = gridWords[gridWords.length - 1];
	const [color, setColor] = useState(
		getCardColor(letter, searchWord, lastWord?.indexOf(letter), dark)
	);

	const isMobile = useMediaQuery('(max-width: 768px)');

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

	useEffect(() => {
		for (let word of gridWords) {
			const col = word.indexOf(letter);
			const wasGreen = searchWord.indexOf(letter) !== word.indexOf(letter);
			if (
				((color === '#6ba964' || color === '#c8b458' || color === '#868E96') &&
					col === -1) ||
				wasGreen
			) {
				break;
			}
			if (col !== -1) {
				setColor(getCardColor(letter, searchWord, word.indexOf(letter), dark));
			}
		}
	}, [used, gridWords, letter, searchWord, dark, color, lastWord]);

	/*
	&& lastWord
					? col !== lastWord?.indexOf(letter)
					: true
	*/

	const backgroundColor = (theme) =>
		used ? color : dark ? '#5C5F66' : theme.colors.gray[3];

	const letterStyle = (theme) => ({
		color: dark || (used && !searchWord.includes(letter)) ? 'white' : 'black',
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
