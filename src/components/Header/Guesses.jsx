import { Text, Group, Center } from '@mantine/core';

const Guesses = () => {
	return (
		<Group
			direction="column"
			position="right"
			style={{
				backgroundColor: '#FA5252',
				color: 'white',
			}}
		>
			<Text>1</Text>
			<Text>2</Text>
			<Text>3</Text>
			<Text>4</Text>
			<Text>5</Text>
		</Group>
	);
};

export default Guesses;
