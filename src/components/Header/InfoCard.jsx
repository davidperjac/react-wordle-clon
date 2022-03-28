import { Center, Title } from '@mantine/core';
import { useTheme } from '../../hooks/useTheme';

const InfoCard = ({ letter, border, backgroundColor, color }) => {
	const { dark } = useTheme();

	const cardStyling = {
		width: 45,
		height: 45,
		border: border ? border : '2px solid #495057',
		backgroundColor: backgroundColor ? backgroundColor : 'none',
		color: color ? color : dark ? 'white' : 'black',
	};
	return (
		<Center style={cardStyling}>
			<Title order={1}>{letter}</Title>
		</Center>
	);
};

export default InfoCard;
