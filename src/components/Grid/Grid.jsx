import Row from './Row';
import { Group } from '@mantine/core';
import { useSelector } from 'react-redux';

const Grid = () => {
	const error = useSelector((state) => state.error).length > 0;
	const gridWords = useSelector((state) => state.gridWords).length;
	return (
		<Group direction="column" spacing="xs">
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
