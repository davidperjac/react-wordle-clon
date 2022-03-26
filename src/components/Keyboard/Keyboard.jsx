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

//import { useLocalStorage } from '../../hooks/useLocalStorage';

const Keyboard = () => {
	const {
		dispatch,
		isShort,
		isNotDictionary,
		searchWord,
		gridWords,
		guessWord,
	} = useWords();
	const { key, setKey } = useKeyboardPress();
	const isMobile = useMediaQuery('(max-width: 768px)');

	useSubmit(key, setKey, dispatch, isShort, isNotDictionary, guessWord);

	useEffect(() => {
		if (gridWords.includes(searchWord) || gridWords.length === 6) {
			dispatch(finishGame());
		}
	}, [gridWords, searchWord, dispatch]);

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
