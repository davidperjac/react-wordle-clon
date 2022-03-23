import { Group } from '@mantine/core';
import Card from '../Grid/Card';

const Row = ({ row }) => {
	return (
		<Group spacing="xs">
			<Card col={0} row={row} />
			<Card col={1} row={row} />
			<Card col={2} row={row} />
			<Card col={3} row={row} />
			<Card col={4} row={row} />
		</Group>
	);
};

export default Row;
