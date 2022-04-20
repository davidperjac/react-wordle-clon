import { Space, Title, Button } from '@mantine/core';
import { FaShareAlt } from 'react-icons/fa';

const ShareButton = () => {
	return (
		<Button
			radius="sm"
			size="xl"
			sx={(theme) => ({
				backgroundColor: '#6ba964',
				'&:hover': {
					backgroundColor: '#83b57d',
				},
			})}
		>
			<Title order={3}>SHARE</Title>
			<Space w="sm" />
			<FaShareAlt />
		</Button>
	);
};

export default ShareButton;
