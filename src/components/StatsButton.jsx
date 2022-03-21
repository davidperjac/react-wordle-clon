import { IoStatsChart } from 'react-icons/io5';
import { ActionIcon, Tooltip } from '@mantine/core';

const StatsButton = () => {
	return (
		<Tooltip label="Stats" withArrow>
			<ActionIcon color="purple" variant="light">
				<IoStatsChart size={30} />
			</ActionIcon>
		</Tooltip>
	);
};

export default StatsButton;
