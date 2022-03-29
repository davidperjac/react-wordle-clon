import { Modal, Text, Group } from '@mantine/core';
import StatGroup from './StatGroup';

const StatsModal = ({ statsModal, setStatsModal }) => {
	return (
		<Modal
			onClose={() => setStatsModal(false)}
			transitiontimingfunction="linear"
			transitionDuration={200}
			withCloseButton={false}
			transition="scale-y"
			opened={statsModal}
			centered
			size="md"
		>
			<Group position="center" direction="column">
				<Text size="md" weight={800}>
					STATISTICS
				</Text>
				<Group position="center" spacing="xs">
					<StatGroup stat="Played" number="0" />
					<StatGroup stat="Win %" number="0" />
					<StatGroup stat="Current Streak" number="0" />
					<StatGroup stat="Max Streak" number="0" />
				</Group>
				<Text size="md" weight={800}>
					GUESS DISTRIBUTION
				</Text>
				<Text size="sm" weight={600}>
					NO DATA
				</Text>
			</Group>
		</Modal>
	);
};

export default StatsModal;
