import { Title } from '@mantine/core';
import { useSelector } from 'react-redux';

const Name = () => {
	const dark = useSelector((state) => state.dark);
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
