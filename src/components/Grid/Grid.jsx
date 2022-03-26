import { useLocalStorage } from '../../hooks/useLocalStorage';
import { cleanWords } from '../../redux/actions';
import { useWords } from '../../hooks/useWords';
import { Group } from '@mantine/core';
import { useEffect } from 'react';
import Row from './Row';

const Grid = () => {
	const [victoryWord, setVictoryWord] = useLocalStorage('VICTORY_WORD', '');
	const { dispatch, searchWord } = useWords();

	useEffect(() => {
		if (searchWord !== victoryWord) {
			localStorage.removeItem('GRID');
			dispatch(cleanWords());
		}
	}, [searchWord, dispatch, victoryWord]);

	useEffect(() => {
		setVictoryWord(searchWord);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchWord]);

	return (
		<Group direction="column" spacing="xss">
			<Row row={0} />
			<Row row={1} />
			<Row row={2} />
			<Row row={3} />
			<Row row={4} />
			<Row row={5} />
		</Group>
	);
};

export default Grid;
