import { getBrowser } from '../../utils/getBrowser';
import { useTheme } from '../../hooks/useTheme';
import { Center, Title } from '@mantine/core';
import { useEffect, useState } from 'react';

const InfoCard = ({ letter, border, backgroundColor, color }) => {
	const { dark } = useTheme();
	const browser = getBrowser();

	const [flip, setFlip] = useState(
		browser !== 'safari' && color && 'rotateX(180deg)'
	);
	const [background, setBackground] = useState('none');

	/* BACKGROUND ANIMATION */

	useEffect(() => {
		setTimeout(function () {
			setBackground(backgroundColor);
		}, 300);
	}, [backgroundColor]);

	/* ROTATION ANIMATION */

	useEffect(() => {
		setTimeout(function () {
			setFlip(browser !== 'safari' && 'rotateX(0deg)');
		}, 500);
		return () => {
			setFlip(browser !== 'safari' && 'rotateX(180deg)');
			setBackground('none');
		};
	}, [browser]);

	const cardStyling = {
		width: 45,
		height: 45,
		border: border ? border : '2px solid #495057',
		backgroundColor: backgroundColor ? background : 'none',
		color: color ? color : dark ? 'white' : 'black',
		transform: flip,
		transition: 'background-color 0.3s , transform 0.3s',
	};
	return (
		<Center style={cardStyling}>
			<Title order={1}>{letter}</Title>
		</Center>
	);
};

export default InfoCard;
