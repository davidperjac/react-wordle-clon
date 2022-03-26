import EndModal from '../components/End/EndModal';
import Keyboard from '../components/Keyboard/Keyboard';
import Header from '../components/Header/Header';
import { Space, Group } from '@mantine/core';
import Grid from '../components/Grid/Grid';

const Home = () => {
	return (
		<Group direction="column" position="center">
			<EndModal />
			<Header />
			<Space h="md" />
			<Grid />
			<Space h="xs" />
			<Keyboard />
		</Group>
	);
};

export default Home;
