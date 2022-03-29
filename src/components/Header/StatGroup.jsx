import { Text, Group, Title } from '@mantine/core';

const StatGroup = ({ number, stat }) => {
	return (
		<Group position="center" direction="column">
			<Title order={1}>{number}</Title>
			<Text size="sm" weight={600}>
				{stat}
			</Text>
		</Group>
	);
};

export default StatGroup;
