import Row from './Row';
import { Group } from '@mantine/core';

const Grid = () => {
	return (
		<Group direction="column" spacing="xs">
			<Row />
			<Row />
			<Row />
			<Row />
			<Row />
			<Row />
		</Group>
	);
};

export default Grid;
