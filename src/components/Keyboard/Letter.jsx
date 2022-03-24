import { Center, Title } from '@mantine/core';
import { addLetter, sendWord, setError } from '../../redux/actions';
import { useWords } from '../../hooks/useWords';
import { getCardColor } from '../../utils/getCardColor';
import { isLetterUsed } from '../../utils/isLetterUsed';
import { useTheme } from '../../hooks/useTheme';
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
	const lastWord = gridWords[gridWords.length - 1];
	const { dark } = useTheme();

	const col = lastWord?.indexOf(letter);
	const used = isLetterUsed(gridWords, letter);
	const [color, setColor] = useState(getCardColor(letter, searchWord, col));

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
			if (letter !== '⌫') {
				dispatch(addLetter(letter));
			}
		}
	};

	useEffect(() => {
		if (color !== '#6ba964') {
			setColor(getCardColor(letter, searchWord, col));
		}
	}, [col, color, lastWord, letter, searchWord, used]);

	const backgroundColor = (theme) =>
		used ? color : dark ? theme.colors.gray[6] : theme.colors.gray[3];

	const letterStyle = (theme) => ({
		backgroundColor: backgroundColor(theme),
		cursor: 'pointer',
		width: 45,
		height: 50,
		borderRadius: '5px',
		color: dark || (used && !searchWord.includes(letter)) ? 'white' : 'black',
	});

	return (
		<Center sx={letterStyle} onClick={handleClick}>
			<Title order={5}>{letter}</Title>
		</Center>
	);
};

export default Letter;
