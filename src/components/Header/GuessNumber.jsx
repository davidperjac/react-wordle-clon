import { Text, Group } from '@mantine/core';
import { useWords } from '../../hooks/useWords';

const GuessNumber = ({ number, value }) => {
	const { gridWords, searchWord } = useWords();
	const win = gridWords.includes(searchWord);
	const backgroundColor =
		gridWords.length === number && win ? '#6ba964' : 'gray';
	const { gamesWon } = JSON.parse(window.localStorage.getItem('STATISTICS'));

	const numberStyle = {
		backgroundColor: backgroundColor,
		color: 'white',
		width: value === 0 ? 25 : 400 * (value / gamesWon),
		height: 19,
		paddingRight: value !== 0 && '5px',
	};
	return (
		<Group style={numberStyle} position={value !== 0 ? 'right' : 'center'}>
			<Text size="sm" weight={800}>
				{value}
			</Text>
		</Group>
	);
};

export default GuessNumber;
