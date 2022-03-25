import { Modal, Text, Group } from '@mantine/core';
import { useWords } from '../../hooks/useWords';
import { useSelector } from 'react-redux';
import { finishGame } from '../../redux/actions';

const EndModal = () => {
	const { dispatch, searchWord } = useWords();
	const endModal = useSelector((state) => state.end);

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
