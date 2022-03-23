import { Center, Title } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCardColor } from '../../utils/getCardColor';

const Card = ({ col, row }) => {
	const words = useSelector((state) => state.gridWords);
	const guessWord = useSelector((state) => state.guessWord);
	const searchWord = useSelector((state) => state.searchWord);
	const dark = useSelector((state) => state.dark);

	const [scale, setScale] = useState('scale(1.1)');

	const content =
		row === words.length ? guessWord[col] : words[row]?.charAt(col);

	useEffect(() => {
		setTimeout(function () {
			setScale('scale(1)');
		}, 200);
		return () => {
			setScale('scale(1.1)');
		};
	}, [content]);

	const cardStyling = {
		width: 55,
		height: 55,
		border: content !== undefined ? '2px solid #495057' : '2px solid #CED4DA',
		backgroundColor:
			row !== words.length
				? getCardColor(words[row]?.charAt(col), searchWord, col, dark)
				: 'none',
		color: dark ? 'white' : row === words.length ? 'black' : 'white',
		transform: content !== undefined && scale,
		transition: 'background-color 0.8s , transform 0.2s',
	};

	return (
		<Center style={cardStyling}>
			<Title>{content}</Title>
		</Center>
	);
};

export default Card;
