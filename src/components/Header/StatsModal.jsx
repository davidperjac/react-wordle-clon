import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Modal, Text, Group } from '@mantine/core';
import StatGroup from './StatGroup';
import { useEffect } from 'react';

const StatsModal = ({ statsModal, setStatsModal }) => {
	const [statistics] = useLocalStorage('STATISTICS', null);

	useEffect(() => {}, [statistics]);

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
					<StatGroup
						stat="Played"
						number={statistics ? statistics.gamesPlayed : 0}
					/>
					<StatGroup
						stat="Win %"
						number={
							statistics
								? (statistics.gamesWon / statistics.gamesPlayed) * 100
								: 0
						}
					/>
					<StatGroup
						stat="Current Streak"
						number={statistics ? statistics.currentStreak : 0}
					/>
					<StatGroup stat="Max Streak" number="0" />
				</Group>
				<Text size="md" weight={800}>
					GUESS DISTRIBUTION
				</Text>
				<Text size="sm" weight={600}>
					{statistics ? 'DATA' : 'NO DATA'}
				</Text>
			</Group>
		</Modal>
	);
};

export default StatsModal;
