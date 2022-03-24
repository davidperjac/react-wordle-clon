import { Group, Space } from '@mantine/core';
import { useKeyboardPress } from '../../hooks/useKeyboardPress';
import { useSubmit } from '../../hooks/useSubmit';
import { useWords } from '../../hooks/useWords';
import ErrorModal from './ErrorModal';
import keys from '../../constants/keys';
import Letter from './Letter';
import { finishGame } from '../../redux/actions';
import { useEffect } from 'react';

const Keyboard = () => {
	const { dispatch, isShort, isNotDictionary, searchWord, gridWords } =
		useWords();
	const { key, setKey } = useKeyboardPress();

	useSubmit(key, setKey, dispatch, isShort, isNotDictionary);

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
						<Group spacing="xss" key={rowIndex}>
							{rowIndex > 0 && <Space w="lg" />}
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
