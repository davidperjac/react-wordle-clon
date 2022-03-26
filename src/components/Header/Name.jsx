import { useTheme } from '../../hooks/useTheme';
import { Title } from '@mantine/core';

const Name = () => {
	const { dark } = useTheme();
	return (
		<Title
			order={1}
			align="center"
			sx={(theme) => ({
				color: dark ? theme.colors.gray[0] : theme.colors.dark[9],
			})}
		>
			REACDLE
		</Title>
	);
};

export default Name;
