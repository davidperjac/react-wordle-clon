import { Group, Space } from '@mantine/core';
import { useKeyboardPress } from '../../hooks/useKeyboardPress';
import { useSubmit } from '../../hooks/useSubmit';
import { finishGame } from '../../redux/actions';
import { useWords } from '../../hooks/useWords';
import { useMediaQuery } from '@mantine/hooks';
import keys from '../../constants/keys';
import ErrorModal from './ErrorModal';
import { useEffect } from 'react';
import Letter from './Letter';

import { useLocalStorage } from '../../hooks/useLocalStorage';

const Keyboard = () => {
	const [victoryWord] = useLocalStorage('VICTORY_WORD', '');
	const { dispatch, searchWord, gridWords } = useWords();
	const isMobile = useMediaQuery('(max-width: 768px)');
	const { key, setKey } = useKeyboardPress();

	const isWordIncluded = gridWords.includes(searchWord);
	const hasWordChanged = victoryWord === searchWord;
	const isGridFull = gridWords.length === 6;

	useSubmit(key, setKey);

	useEffect(() => {
		setTimeout(function () {
			if ((isWordIncluded || isGridFull) && hasWordChanged) {
				dispatch(finishGame());
			}
		}, 3000);
	}, [dispatch, isWordIncluded, isGridFull, hasWordChanged]);

	return (
		<>
			<ErrorModal />
			<Group direction="column" spacing="xs">
				{keys.map((row, rowIndex) => {
					return (
						<Group spacing="xssT" key={rowIndex}>
							{rowIndex > 0 && <Space w={isMobile ? 'md' : 'lg'} />}
							{row.map((letter, letterIndex) => {
								return (
									rowIndex < 3 && <Letter letter={letter} key={letterIndex} />
								);
							})}
						</Group>
					);
				})}
			</Group>
		</>
	);
};

export default Keyboard;
