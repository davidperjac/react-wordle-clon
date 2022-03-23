import { Modal, Text, Group } from '@mantine/core';

const StatsModal = ({ statsModal, setStatsModal }) => {
	return (
		<Modal
			transition="scale-y"
			transitionDuration={400}
			transitiontimingfunction="linear"
			opened={statsModal}
			onClose={() => setStatsModal(false)}
			title="KNOW YOUR NUMBERS!"
			size="md"
			styles={{
				title: { fontWeight: '800' },
			}}
		>
			<Group>
				<Text size="md" weight={500}>
					Here you have your statistics:
				</Text>
				<Text size="md" weight={800}>
					Get better!
				</Text>
			</Group>
		</Modal>
	);
};

export default StatsModal;
