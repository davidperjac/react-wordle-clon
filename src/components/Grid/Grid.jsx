import { encryptWithAES, decryptWithAES } from '../../utils/codification';
import { useKeyboardPress } from '../../hooks/useKeyboardPress';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { finishGame, cleanWords } from '../../redux/actions';
import { useSubmit } from '../../hooks/useSubmit';
import { useWords } from '../../hooks/useWords';
import { Group } from '@mantine/core';
import { useEffect } from 'react';
import Row from './Row';
import {
	hasNoStats,
	addGamePlayed,
	addVictory,
	addDefeat,
} from '../../utils/localStorageStats';

const Grid = () => {
	const [victoryWord, setVictoryWord] = useLocalStorage('VICTORY_WORD', '');
	const [statistics, setStatistics] = useLocalStorage('STATISTICS', null);
	const { dispatch, searchWord, gridWords } = useWords();
	const [play, setCanPlay] = useLocalStorage('PLAY', '');
	const { key, setKey } = useKeyboardPress();

	const win = gridWords.includes(searchWord);
	const lose = gridWords.length === 6 && !win;
	const noStats = !window.localStorage.getItem('STATISTICS');

	/* DECIDES IF A PLAYER CAN CONTINUE PLAYING */

	useEffect(() => {
		setCanPlay(win || lose ? false : true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [win, lose]);

	/* ESTABLISH STATISTICS AFTER A MATCH */

	useEffect(() => {
		setTimeout(function () {
			if ((win || lose) && play) {
				dispatch(finishGame());
				if (noStats) {
					hasNoStats(setStatistics, statistics);
				} else {
					addGamePlayed(setStatistics, statistics);
					if (win) {
						addVictory(setStatistics, statistics);
					}
					if (lose) {
						addDefeat(setStatistics, statistics);
					}
				}
			}
		}, 3000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [win, lose]);

	/* REMOVE GRID WORDS WHEN DAY CHANGES */

	useEffect(() => {
		if (searchWord !== decryptWithAES(victoryWord)) {
			localStorage.removeItem('PLAYER_WORDS');
			dispatch(cleanWords());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
