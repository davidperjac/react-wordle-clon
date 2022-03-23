import { Center, Title } from '@mantine/core';
import { useSelector } from 'react-redux';

const InfoCard = ({ letter, border, backgroundColor, color }) => {
	const dark = useSelector((state) => state.dark);

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
