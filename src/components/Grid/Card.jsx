import { Center, Title } from '@mantine/core';

const Card = ({
	letter = 'A',
	width = 55,
	height = 55,
	border = '2px solid grey',
	backgroundColor = 'none',
	color = 'black',
}) => {
	return (
		<Center
			style={{
				width: width,
				height: height,
				border: border,
				backgroundColor: backgroundColor,
				color: color,
			}}
		>
			<Title>{letter}</Title>
		</Center>
	);
};

export default Card;
