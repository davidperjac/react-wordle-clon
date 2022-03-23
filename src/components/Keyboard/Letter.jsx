import { Center, Title } from '@mantine/core';
import { addLetter, sendWord, setError } from '../../redux/actions';
import { useCurrentWord } from '../../hooks/useCurrentWord';

//TODO: CHANGE LETTERS IN KEYBOARD ACORDING TO THE WORD

const Letter = ({ letter }) => {
	const { dispatch, isShort, isNotDictionary } = useCurrentWord();

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
		backgroundColor: theme.colors.gray[4],
		'&:hover': {
			backgroundColor: theme.colors.gray[3],
		},
		cursor: 'pointer',
		width: 45,
		height: 50,
		borderRadius: '5px',
	});

	return (
		<Center sx={letterStyle} onClick={handleClick}>
			<Title order={5}>{letter}</Title>
		</Center>
	);
};

export default Letter;
