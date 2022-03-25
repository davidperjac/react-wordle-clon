import { getCardColor } from '../../utils/getCardColor';
import { getBrowser } from '../../utils/getBrowser';
import { useWords } from '../../hooks/useWords';
import { useTheme } from '../../hooks/useTheme';
import { Center, Title } from '@mantine/core';
import { useState, useEffect } from 'react';

const Card = ({ row, col }) => {
	const browser = getBrowser();

	const [background, setBackground] = useState('none');
	const [flip, setFlip] = useState(browser !== 'safari' && 'rotateY(180deg)');
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
	}, [col, gridWords, searchWord, color, isActive]);

	useEffect(() => {
		setTimeout(function () {
			setFlip(browser !== 'safari' && 'rotateY(0deg)');
		}, 200 * (col + 1));
		return () => {
			setFlip(browser !== 'safari' && 'rotateY(180deg)');
			setBackground('none');
		};
	}, [isActive, col, browser]);

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
		transform:
			(hasContent && !isActive && flip) || (hasContent && isActive && scale),
		transition: 'background-color 0.8s , transform 0.2s',
		transitionDelay: '1ms',
		backgroundColor: !isActive ? background : 'none',
		color: colorStyle,
		border: border,
		height: 60,
		width: 60,
	};

	return (
		<Center style={cardStyling}>
			<Title>{content}</Title>
		</Center>
	);
};

export default Card;
