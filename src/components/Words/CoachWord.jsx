import { Group, Text, Title } from '@mantine/core';
import Card from '../Grid/Card';

const CoachWord = () => {
	return (
		<>
			<Group spacing="xss">
				<Card letter="C" width={30} height={30} />
				<Card
					letter="O"
					width={30}
					height={30}
					border="2px solid #c8b458"
					backgroundColor="#c8b458"
					color="white"
				/>
				<Card letter="U" width={30} height={30} />
				<Card letter="C" width={30} height={30} />
				<Card letter="H" width={30} height={30} />
			</Group>
			<Text size="md" weight={500}>
				The letter{' '}
				<Title weight="bold" inherit component="span" order={5}>
					O
				</Title>{' '}
				is in the word but in the wrong spot.
			</Text>
		</>
	);
};

export default CoachWord;
