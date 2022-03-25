import { Group, Text, Title } from '@mantine/core';
import InfoCard from '../Header/InfoCard';

const CoachWord = () => {
	return (
		<>
			<Group spacing="xss">
				<InfoCard letter="C" />
				<InfoCard
					letter="O"
					border="2px solid #c8b458"
					backgroundColor="#c8b458"
					color="white"
				/>
				<InfoCard letter="U" />
				<InfoCard letter="C" />
				<InfoCard letter="H" />
			</Group>
			<Text size="md" weight={500}>
				The letter{' '}
				<Title weight="bold" component="span" order={5}>
					O
				</Title>{' '}
				is in the word but in the wrong spot.
			</Text>
		</>
	);
};

export default CoachWord;
