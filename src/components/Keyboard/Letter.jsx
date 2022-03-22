import { Center, Title } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { addLetter, sendWord } from '../../redux/actions';

//TODO: CHANGE LETTERS IN KEYBOARD ACORDING TO THE WORD

const Letter = ({ letter }) => {
	const dispatch = useDispatch();
	const guessWord = useSelector((state) => state.guessWord);
	const searchWord = useSelector((state) => state.searchWord);

	const col = guessWord.indexOf(letter);

	const handleClick = () => {
		if (letter !== '⏎') {
			dispatch(addLetter(letter === '⌫' ? 'BACKSPACE' : letter));
		}
		if (guessWord.length === 5) {
			console.log(col);
			dispatch(sendWord(letter === '⏎' && 'ENTER'));
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
