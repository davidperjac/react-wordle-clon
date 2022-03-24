import { getCardColor } from '../../utils/getCardColor';
import { useWords } from '../../hooks/useWords';
import { useTheme } from '../../hooks/useTheme';
import { Center, Title } from '@mantine/core';
import { useState, useEffect } from 'react';

const Card = ({ col, row }) => {
	const [background, setBackground] = useState('none');
	const [scale, setScale] = useState('scale(1.1)');

	const { gridWords, guessWord, searchWord } = useWords();
	const { dark } = useTheme();

	const isActive = row === gridWords.length;
	const color = getCardColor(gridWords[row]?.charAt(col), searchWord, col);
	const content = isActive ? guessWord[col] : gridWords[row]?.charAt(col);
	const hasContent = content !== undefined;

	useEffect(() => {
		setTimeout(function () {
			setScale('scale(1)');
		}, 100);
		return () => {
			setScale('scale(1.1)');
		};
	}, [content]);

	useEffect(() => {
		setTimeout(function () {
			!isActive && setBackground(color);
		}, 200 * (col + 1));
	}, [col, gridWords, row, searchWord, color, isActive]);

	const border =
		!isActive && hasContent && background !== 'none'
			? color
			: hasContent && !dark
			? '2px solid #495057'
			: '2px solid #CED4DA';

	const colorStyle = dark
		? 'white'
		: !isActive && background !== 'none'
		? 'white'
		: 'black';

	const cardStyling = {
		width: 60,
		height: 60,
		border: border,
		backgroundColor: !isActive ? background : 'none',
		color: colorStyle,
		transform: hasContent && scale,
		transition: 'background-color 0.8s , transform 0.2s',
	};

	return (
		<Center style={cardStyling}>
			<Title>{content}</Title>
		</Center>
	);
};

export default Card;
