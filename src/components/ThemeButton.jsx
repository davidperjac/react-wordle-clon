import { HiSun } from 'react-icons/hi';
import { ActionIcon } from '@mantine/core';

const ThemeButton = () => {
	return (
		<ActionIcon color="purple" variant="light">
			<HiSun size={30} />
		</ActionIcon>
	);
};

export default ThemeButton;
