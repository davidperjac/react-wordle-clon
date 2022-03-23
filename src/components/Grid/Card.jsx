import { Center, Title } from '@mantine/core';
import { useState, useEffect } from 'react';
import { getCardColor } from '../../utils/getCardColor';
import { useWords } from '../../hooks/useWords';
import { useTheme } from '../../hooks/useTheme';

const Card = ({ col, row }) => {
	const { dark } = useTheme();
	const { gridWords, guessWord, searchWord } = useWords();
	const [scale, setScale] = useState('scale(1.1)');

	const content =
		row === gridWords.length ? guessWord[col] : gridWords[row]?.charAt(col);

	useEffect(() => {
		setTimeout(function () {
			setScale('scale(1)');
		}, 100);
		return () => {
			setScale('scale(1.1)');
		};
	}, [content]);

	const cardStyling = {
		width: 55,
		height: 55,
		border:
			row !== gridWords.length && content !== undefined
				? getCardColor(gridWords[row]?.charAt(col), searchWord, col)
				: content !== undefined
				? '2px solid #495057'
				: '2px solid #CED4DA',
		backgroundColor:
			row !== gridWords.length
				? getCardColor(gridWords[row]?.charAt(col), searchWord, col)
				: 'none',
		color: dark ? 'white' : row === gridWords.length ? 'black' : 'white',
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
