import { Group, Text, Title } from '@mantine/core';
import Card from '../Grid/Card';

const AdultWord = () => {
	return (
		<>
			<Group spacing="xss">
				<Card
					letter="A"
					width={30}
					height={30}
					border="2px solid #74B816"
					backgroundColor="#74B816"
					color="white"
				/>
				<Card letter={'D'} width={30} height={30} />
				<Card letter={'U'} width={30} height={30} />
				<Card letter={'L'} width={30} height={30} />
				<Card letter={'T'} width={30} height={30} />
			</Group>
			<Text size="md" weight={500}>
				The letter{' '}
				<Title weight="bold" inherit component="span" order={5}>
					A
				</Title>{' '}
				is in the word and in the correct spot.
			</Text>
		</>
	);
};

export default AdultWord;
