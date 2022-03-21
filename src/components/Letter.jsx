import { Center, Title } from '@mantine/core';

const Letter = ({ letter }) => {
	return (
		<Center
			style={{ width: 45, height: 50, borderRadius: '5px' }}
			sx={(theme) => ({
				backgroundColor: theme.colors.gray[4],
				'&:hover': {
					backgroundColor: theme.colors.gray[3],
				},
				cursor: 'pointer',
			})}
		>
			{letter === 'ENTER' ? (
				<Title order={6}>{letter}</Title>
			) : (
				<Title order={5}>{letter}</Title>
			)}
		</Center>
	);
};

export default Letter;
