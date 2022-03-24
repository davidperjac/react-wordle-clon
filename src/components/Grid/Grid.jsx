import Row from './Row';
import { Group } from '@mantine/core';

const Grid = () => {
	return (
		<Group direction="column" spacing="xss">
			<Row row={0} />
			<Row row={1} />
			<Row row={2} />
			<Row row={3} />
			<Row row={4} />
			<Row row={5} />
		</Group>
	);
};

export default Grid;
