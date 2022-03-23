import { Center, Title } from '@mantine/core';
import { useSelector } from 'react-redux';
import { getCardColor } from '../../utils/getCardColor';

const Card = ({ col, row }) => {
	const words = useSelector((state) => state.gridWords);
	const guessWord = useSelector((state) => state.guessWord);
	const searchWord = useSelector((state) => state.searchWord);
	const dark = useSelector((state) => state.dark);

	const content =
		row === words.length ? guessWord[col] : words[row]?.charAt(col);

	const cardStyling = {
		width: 55,
		height: 55,
		border: content !== undefined ? '2px solid #495057' : '2px solid #CED4DA',
		backgroundColor:
			row !== words.length
				? getCardColor(words[row]?.charAt(col), searchWord, col, dark)
				: 'none',
		color: dark ? 'white' : row === words.length ? 'black' : 'white',
	};
	return (
		<Center style={cardStyling}>
			<Title>{content}</Title>
		</Center>
	);
};

export default Card;
