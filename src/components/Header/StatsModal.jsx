import { Modal, Text, Group, Space } from '@mantine/core';
import { openStats } from '../../redux/actions';
import { useWords } from '../../hooks/useWords';
import { useSelector } from 'react-redux';
import ShareButton from './ShareButton';
import StatGroup from './StatGroup';
import Guesses from './Guesses';
import Clock from './Clock';
import Divider from './Divider';

const StatsModal = ({ statsModal, setStatsModal }) => {
	const statistics = JSON.parse(window.localStorage.getItem('STATISTICS'));
	const { gamesPlayed, gamesWon, currentStreak, maxStreak } = statistics;
	const play = JSON.parse(window.localStorage.getItem('PLAY'));
	const stats = useSelector((state) => state.end.stats);
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
			padding="xl"
			size={550}
			centered
		>
			<Group position="center" direction="column" spacing="xl">
				<Text size="md" weight={800}>
					STATISTICS
				</Text>
				<Group position="center" spacing="xss">
					<StatGroup stat="Played" number={statistics ? gamesPlayed : 0} />
					<StatGroup
						stat="Win %"
						number={
							statistics ? ((gamesWon / gamesPlayed) * 100).toFixed(2) : 0
						}
					/>
					<StatGroup
						stat="Current Streak"
						number={statistics ? currentStreak : 0}
					/>
					<StatGroup stat="Max Streak" number={statistics ? maxStreak : 0} />
				</Group>
				<Text size="md" weight={800}>
					GUESS DISTRIBUTION
				</Text>
			</Group>
			<Space h="sm" />
			{statistics ? (
				<Guesses />
			) : (
				<Text size="sm" weight={600}>
					NO DATA
				</Text>
			)}
			<Space h="md" />
			{!play && (
				<Group position="center" spacing="xxl">
					<Group direction="column" position="center">
						<Text size="md" weight={700}>
							NEXT REACDLE
						</Text>
						<Clock />
					</Group>
					<Divider />
					<ShareButton />
				</Group>
			)}
		</Modal>
	);
};

export default StatsModal;
