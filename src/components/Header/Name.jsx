import { useTheme } from '../../hooks/useTheme';
import { Title } from '@mantine/core';

const Name = () => {
	const { dark } = useTheme();
	return (
		<Title
			order={1}
			align="center"
			sx={(theme) => ({
				fontFamily: 'Bitter',
				letterSpacing: '-0.5px',
				color: dark ? theme.colors.gray[0] : theme.colors.dark[9],
			})}
		>
			Reacdle
		</Title>
	);
};

export default Name;
