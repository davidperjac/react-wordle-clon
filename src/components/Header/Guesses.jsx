import { guessKeys } from '../../constants/keys';
import { Text, Group } from '@mantine/core';
import GuessNumber from './GuessNumber';

const Guesses = () => {
	const { guesses } = JSON.parse(window.localStorage.getItem('STATISTICS'));
	return (
		<Group spacing="xss">
			<Group
				direction="column"
				position="left"
				spacing="xssT"
				style={{
					marginLeft: '40px',
				}}
			>
				{guessKeys.map((key) => {
					return (
						<Text key={key} size="sm" weight={600}>
							{key}
						</Text>
					);
				})}
			</Group>
			<Group direction="column" position="left" spacing="xss">
				{guessKeys.map((key) => {
					return <GuessNumber key={key} number={key} value={guesses[key]} />;
				})}
			</Group>
		</Group>
	);
};

export default Guesses;
