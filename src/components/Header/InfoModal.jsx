import { Modal, Text, Group } from '@mantine/core';
import { useEffect } from 'react';
import AdultWord from '../Words/AdultWord';
import CoachWord from '../Words/CoachWord';
import DreamWord from '../Words/DreamWord';

const InfoModal = ({ infoModal, setInfoModal }) => {
	const linkStyle = { textDecoration: 'none', color: '#6ba964', weight: 800 };
	const noStats = !window.localStorage.getItem('STATISTICS');

	useEffect(() => {
		setTimeout(() => {
			if (noStats) {
				setInfoModal(true);
			}
		}, 1000);
	}, [noStats, setInfoModal]);

	return (
		<Modal
			onClose={() => setInfoModal(false)}
			transitiontimingfunction="linear"
			transitionDuration={400}
			overlayOpacity={0.3}
			transition="slide-up"
			title="HOW TO PLAY!"
			overflow="none"
			opened={infoModal}
			trapFocus={false}
			size="md"
			styles={{
				title: { fontWeight: '800' },
			}}
		>
			<Group>
				<Text size="md" weight={500}>
					Guess the REACDLE in six tries. Each guess must be a valid five-letter
					word. Hit the enter button to submit. After each guess, the color of
					the tiles will change to show how close your guess was to the word.
				</Text>
				<Text size="md" weight={800}>
					Here you have some examples!
				</Text>
				<AdultWord />
				<CoachWord />
				<DreamWord />
				<Text size="md" weight={800}>
					A new REACDLE will be available each day!
				</Text>
				<Text size="sm" weight={600}>
					This is an adaptation of
					<a
						href="https://www.nytimes.com/games/wordle/index.html"
						style={linkStyle}
					>
						{' '}
						Wordle{' '}
					</a>
					by{' '}
					<a href="https://twitter.com/powerlanguish?lang=es" style={linkStyle}>
						Josh Wordle
					</a>
				</Text>
			</Group>
		</Modal>
	);
};

export default InfoModal;
