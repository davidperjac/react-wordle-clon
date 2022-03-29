import { Modal, Text, Group } from '@mantine/core';
import { finishGame } from '../../redux/actions';
import { useWords } from '../../hooks/useWords';
import { useSelector } from 'react-redux';
import { useTheme } from '../../hooks/useTheme';

const EndModal = () => {
	const { dispatch, searchWord } = useWords();
	const { dark } = useTheme();
	const endModal = useSelector((state) => state.end.end);

	return (
		<Modal
			onClose={() => dispatch(finishGame())}
			transitiontimingfunction="linear"
			transitionDuration={400}
			withCloseButton={false}
			closeOnEscape={false}
			overlayOpacity={0}
			transition="pop"
			trapFocus={false}
			opened={endModal}
			radius="sm"
			size={90}
			padding="sm"
			zIndex={0}
			styles={{
				modal: {
					backgroundColor: dark ? 'white' : 'black',
					color: dark ? 'black' : 'white',
					top: '35px',
				},
			}}
		>
			<Group position="center">
				<Text size="md" weight={700}>
					{searchWord}
				</Text>
			</Group>
		</Modal>
	);
};

export default EndModal;
