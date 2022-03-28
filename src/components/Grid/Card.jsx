import { getCardColor } from '../../utils/getCardColor';
import { addLetterColor } from '../../redux/actions';
import { getBrowser } from '../../utils/getBrowser';
import { useViewportSize } from '@mantine/hooks';
import { useWords } from '../../hooks/useWords';
import { useTheme } from '../../hooks/useTheme';
import { useMediaQuery } from '@mantine/hooks';
import { Center, Title } from '@mantine/core';
import { useState, useEffect } from 'react';

const Card = ({ row, col }) => {
	const browser = getBrowser();

	const [flip, setFlip] = useState(browser !== 'safari' && 'rotateX(180deg)');
	const [background, setBackground] = useState('none');
	const [scale, setScale] = useState('scale(1.1)');

	const { dispatch, gridWords, guessWord, searchWord } = useWords();
	const { dark } = useTheme();

	const color = getCardColor(gridWords[row]?.charAt(col), searchWord, col);
	const isActive = row === gridWords.length;
	const content = isActive ? guessWord[col] : gridWords[row]?.charAt(col);
	const hasContent = content !== undefined;

	const { width } = useViewportSize();
	const isMobile = useMediaQuery('(max-width: 375px)');
	const square = isMobile ? Math.floor(width / 7.5) : 60;

	/* CHANGE KEYBOARD COLORS */

	useEffect(() => {
		if (!isActive && hasContent) {
			dispatch(addLetterColor({ letter: content, color: color }));
		}
	}, [dispatch, hasContent, isActive, color, content]);

	/* SCALE ANIMATION */

	useEffect(() => {
		setTimeout(function () {
			setScale('scale(1)');
		}, 50);
		return () => {
			setScale('scale(2)');
		};
	}, [content]);

	/* BACKGROUND ANIMATION */

	useEffect(() => {
		setTimeout(function () {
			!isActive && setBackground(color);
		}, 200 * (col + 1));
	}, [col, color, isActive]);

	/* ROTATION ANIMATION */

	useEffect(() => {
		setTimeout(function () {
			setFlip(browser !== 'safari' && 'rotateX(0deg)');
		}, 200 * (col + 1));
		return () => {
			setFlip(browser !== 'safari' && 'rotateX(180deg)');
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
		transition: 'background-color 0.3s , transform 0.8s',
		backgroundColor: !isActive ? background : 'none',
		color: colorStyle,
		border: border,
		height: square,
		width: square,
	};

	return (
		<Center style={cardStyling}>
			<Title>{content}</Title>
		</Center>
	);
};

export default Card;
