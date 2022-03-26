import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Modal, Text, Group } from '@mantine/core';
import { finishGame } from '../../redux/actions';
import { useWords } from '../../hooks/useWords';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const EndModal = () => {
	const { dispatch, searchWord } = useWords();
	const endModal = useSelector((state) => state.end);

	const [victoryWord, setVictoryWord] = useLocalStorage(
		'VICTORY_WORD',
		searchWord
	);
	const [, setStoredWords] = useLocalStorage('GRID', []);

	useEffect(() => {
		if (endModal) {
			setVictoryWord(searchWord);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchWord, endModal]);

	useEffect(() => {
		if (searchWord !== victoryWord) {
			setStoredWords([]);
		}
	}, []);

	return (
		<Modal
			transition="scale"
			transitionDuration={400}
			transitiontimingfunction="linear"
			opened={endModal}
			onClose={() => dispatch(finishGame())}
			title="REACTDLE"
			size="md"
			trapFocus={false}
			styles={{
				title: { fontWeight: '800' },
				transform: 'translateZ(1000px)',
			}}
		>
			<Group>
				<Text size="md" weight={500}>
					The word was {searchWord}
				</Text>
			</Group>
		</Modal>
	);
};

export default EndModal;
