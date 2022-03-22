import { Center, Title } from '@mantine/core';

const InfoCard = ({ letter, border, backgroundColor, color }) => {
	const cardStyling = {
		width: 30,
		height: 30,
		border: border ? border : '2px solid #495057',
		backgroundColor: backgroundColor ? backgroundColor : 'none',
		color: color ? color : 'black',
	};
	return (
		<Center style={cardStyling}>
			<Title>{letter}</Title>
		</Center>
	);
};

export default InfoCard;
