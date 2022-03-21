import { Group, Text, Title } from '@mantine/core';
import Card from '../Grid/Card';

const DreamWord = () => {
	return (
		<>
			<Group spacing="xss">
				<Card letter="D" width={30} height={30} />
				<Card letter="R" width={30} height={30} />
				<Card letter="E" width={30} height={30} />
				<Card letter="A" width={30} height={30} />
				<Card
					letter="M"
					width={30}
					height={30}
					border="2px solid #868E96"
					backgroundColor="#868E96"
					color="white"
				/>
			</Group>
			<Text size="md" weight={500}>
				The letter{' '}
				<Title weight="bold" inherit component="span" order={5}>
					M
				</Title>{' '}
				is not in the word in any spot.
			</Text>
		</>
	);
};

export default DreamWord;
