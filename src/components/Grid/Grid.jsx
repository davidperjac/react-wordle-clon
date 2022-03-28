import { encryptWithAES, decryptWithAES } from '../../utils/codification';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useKeyboardPress } from '../../hooks/useKeyboardPress';
import { finishGame, cleanWords } from '../../redux/actions';
import { useSubmit } from '../../hooks/useSubmit';
import { useWords } from '../../hooks/useWords';
import { Group } from '@mantine/core';
import { useEffect } from 'react';
import Row from './Row';

const Grid = () => {
	const [victoryWord, setVictoryWord] = useLocalStorage('VICTORY_WORD', '');
	const { dispatch, searchWord, gridWords } = useWords();
	const { key, setKey } = useKeyboardPress();

	const isWordIncluded = gridWords.includes(searchWord);
	const hasWordChanged = victoryWord === searchWord;
	const isGridFull = gridWords.length === 6;

	/* FINISH GAME HANDLER */

	useEffect(() => {
		setTimeout(function () {
			if ((isWordIncluded || isGridFull) && hasWordChanged) {
				dispatch(finishGame());
			}
		}, 3000);
	}, [dispatch, isWordIncluded, isGridFull, hasWordChanged]);

	useEffect(() => {
		if (searchWord !== decryptWithAES(victoryWord)) {
			localStorage.removeItem('PLAYER_WORDS');
			dispatch(cleanWords());
		}
	}, [searchWord, dispatch, victoryWord]);

	/* STABLISH THE WINNING WORD */

	useEffect(() => {
		setVictoryWord(encryptWithAES(searchWord));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchWord]);

	/* HANDLER OF SUBMITS BY KEYBOARD */

	useSubmit(key, setKey);

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
