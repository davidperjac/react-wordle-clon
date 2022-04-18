import { Modal, Text, Group } from '@mantine/core';
import { openStats } from '../../redux/actions';
import { useWords } from '../../hooks/useWords';
import { useSelector } from 'react-redux';
import StatGroup from './StatGroup';
import Clock from './Clock';

const StatsModal = ({ statsModal, setStatsModal }) => {
	const statistics = JSON.parse(window.localStorage.getItem('STATISTICS'));
	const stats = useSelector((state) => state.end.stats);
	const play = JSON.parse(window.localStorage.getItem('PLAY'));
	const { dispatch } = useWords();

	const handleClose = () => {
		setStatsModal(false);
		if (!statsModal) {
			dispatch(openStats());
		}
	};

	return (
		<Modal
			transitiontimingfunction="linear"
			opened={statsModal || stats}
			transitionDuration={400}
			withCloseButton={false}
			onClose={handleClose}
			transition="slide-up"
			overlayOpacity={0.3}
			trapFocus={false}
			centered
			size="md"
		>
			<Group position="center" direction="column">
				<Text size="md" weight={800}>
					STATISTICS
				</Text>
				<Group position="center" spacing="xss">
					<StatGroup
						stat="Played"
						number={statistics ? statistics.gamesPlayed : 0}
					/>
					<StatGroup
						stat="Win %"
						number={
							statistics
								? (
										(statistics.gamesWon / statistics.gamesPlayed) *
										100
								  ).toFixed(2)
								: 0
						}
					/>
					<StatGroup
						stat="Current Streak"
						number={statistics ? statistics.currentStreak : 0}
					/>
					<StatGroup
						stat="Max Streak"
						number={statistics ? statistics.maxStreak : 0}
					/>
				</Group>
				<Text size="md" weight={800}>
					GUESS DISTRIBUTION
				</Text>
				<Text size="sm" weight={600}>
					{statistics ? 'DATA' : 'NO DATA'}
				</Text>
				{!play && (
					<>
						<Text size="md" weight={800}>
							NEXT REACDLE
						</Text>
						<Clock />
					</>
				)}
			</Group>
		</Modal>
	);
};

export default StatsModal;
