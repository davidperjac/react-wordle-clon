import { Modal, Text, Group } from '@mantine/core';
import AdultWord from '../Words/AdultWord';
import CoachWord from '../Words/CoachWord';
import DreamWord from '../Words/DreamWord';

const InfoModal = ({ infoModal, setInfoModal }) => {
	const linkStyle = { textDecoration: 'none', color: '#6ba964', weight: 800 };
	return (
		<Modal
			transition="scale-y"
			transitionDuration={200}
			transitiontimingfunction="linear"
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
					Guess the REACDLE in six tries. Each guess must be a valid five-letter
					word.
				</Text>
				<Text size="md" weight={500}>
					Hit the enter button to submit. After each guess, the color of the
					tiles will change to show how close your guess was to the word.
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
