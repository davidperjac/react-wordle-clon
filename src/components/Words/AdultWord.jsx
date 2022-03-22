import { Group, Text, Title } from '@mantine/core';
import InfoCard from '../Header/InfoCard';

const AdultWord = () => {
	return (
		<>
			<Group spacing="xss">
				<InfoCard
					letter="A"
					border="2px solid #6ba964"
					backgroundColor="#6ba964"
					color="white"
				/>
				<InfoCard letter={'D'} />
				<InfoCard letter={'U'} />
				<InfoCard letter={'L'} />
				<InfoCard letter={'T'} />
			</Group>
			<Text size="md" weight={500}>
				The letter{' '}
				<Title weight="bold" component="span" order={5}>
					A
				</Title>{' '}
				is in the word and in the correct spot.
			</Text>
		</>
	);
};

export default AdultWord;
