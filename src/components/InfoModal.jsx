import { Modal, Text, Group } from '@mantine/core';

const InfoModal = ({ infoModal, setInfoModal }) => {
	return (
		<Modal
			transition="slide-down"
			transitionDuration={400}
			transitionTimingFunction="ease"
			opened={infoModal}
			onClose={() => setInfoModal(false)}
			title="HOW TO PLAY!"
			size="md"
			styles={{
				title: { fontWeight: '800' },
			}}
		>
			<Group>
				<Text size="md" weight={500}>
					Guess the WORDLE in six tries. Each guess must be a valid five-letter
					word.
				</Text>
				<Text size="md" weight={500}>
					Hit the enter button to submit. After each guess, the color of the
					tiles will change to show how close your guess was to the word.
				</Text>
				<Text size="md" weight={800}>
					Examples
				</Text>
				<Text size="md" weight={500}>
					The letter W is in the word and in the correct spot.
				</Text>
				<Text size="md" weight={500}>
					The letter I is in the word but in the wrong spot.
				</Text>
				<Text size="md" weight={500}>
					The letter U is not in the word in any spot.
				</Text>
				<Text size="md" weight={800}>
					A new REACDLE will be available each day!
				</Text>
			</Group>
		</Modal>
	);
};

export default InfoModal;
