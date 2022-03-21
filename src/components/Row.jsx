import { Group } from '@mantine/core';
import Card from './Card';

const Row = () => {
	return (
		<Group spacing="xs">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</Group>
	);
};

export default Row;
