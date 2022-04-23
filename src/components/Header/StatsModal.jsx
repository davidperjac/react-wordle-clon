import { Modal, Text, Group, Space } from '@mantine/core';
import { openStats } from '../../redux/actions';
import { useWords } from '../../hooks/useWords';
import { useMediaQuery } from '@mantine/hooks';
import { useSelector } from 'react-redux';
import ShareButton from './ShareButton';
import StatGroup from './StatGroup';
import Divider from './Divider';
import Guesses from './Guesses';
import Clock from './Clock';

const StatsModal = ({ statsModal, setStatsModal }) => {
	const statistics = JSON.parse(window.localStorage.getItem('STATISTICS'));
	const play = JSON.parse(window.localStorage.getItem('PLAY'));
	const stats = useSelector((state) => state.end.stats);
	const isMobile = useMediaQuery('(max-width: 768px)');
	const { dispatch } = useWords();

	console.log(process.env.NODE_ENV);

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
			padding="lg"
			size={550}
			centered
		>
			<Group position="center" direction="column" spacing="xl">
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
			</Group>
			<Space h="sm" />
			{statistics ? (
				<Guesses />
			) : (
				<Group position="center">
					<Text size="sm" weight={600}>
						NO DATA
					</Text>
				</Group>
			)}
			<Space h="md" />
			{!play && (
				<Group position="center" noWrap spacing={isMobile ? 'md' : 'xxl'}>
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
