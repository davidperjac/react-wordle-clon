import { Center, Title } from '@mantine/core';
import { addLetter, sendWord, setError } from '../../redux/actions';
import { useCurrentWord } from '../../hooks/useCurrentWord';
import { useSelector } from 'react-redux';
import { getCardColor } from '../../utils/getCardColor';
import { isLetterUsed } from '../../utils/isLetterUsed';

//TODO: CHANGE LETTERS IN KEYBOARD ACORDING TO THE WORD

const Letter = ({ letter }) => {
	const { dispatch, isShort, isNotDictionary } = useCurrentWord();
	const gridWords = useSelector((state) => state.gridWords);
	const lastWord = gridWords[gridWords.length - 1];
	const searchWord = useSelector((state) => state.searchWord);
	const dark = useSelector((state) => state.dark);

	const col = lastWord?.indexOf(letter);

	const used = isLetterUsed(gridWords, letter);

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
			dispatch(addLetter(letter === '⌫' ? 'BACKSPACE' : letter));
		}
	};

	const letterStyle = (theme) => ({
		backgroundColor:
			used && lastWord?.includes(letter)
				? getCardColor(letter, searchWord, col)
				: dark
				? theme.colors.gray[6]
				: theme.colors.gray[3],
		cursor: 'pointer',
		width: 45,
		height: 50,
		borderRadius: '5px',
		color:
			dark || (getCardColor(letter, searchWord, col) === '#495057' && used)
				? 'white'
				: 'black',
	});

	return (
		<Center sx={letterStyle} onClick={handleClick}>
			<Title order={5}>{letter}</Title>
		</Center>
	);
};

export default Letter;
