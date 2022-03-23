import { Group, Text, Title } from '@mantine/core';
import InfoCard from '../Header/InfoCard';

const DreamWord = () => {
	return (
		<>
			<Group spacing="xs">
				<InfoCard letter="D" />
				<InfoCard letter="R" />
				<InfoCard letter="E" />
				<InfoCard letter="A" />
				<InfoCard
					letter="M"
					border="2px solid #868E96"
					backgroundColor="#868E96"
					color="white"
				/>
			</Group>
			<Text size="md" weight={500}>
				The letter{' '}
				<Title weight="bold" component="span" order={5}>
					M
				</Title>{' '}
				is not in the word in any spot.
			</Text>
		</>
	);
};

export default DreamWord;
