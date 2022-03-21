//import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import Keyboard from '../components/Keyboard/Keyboard';
import Grid from '../components/Grid/Grid';
import { Space, Group } from '@mantine/core';

const Home = () => {
	return (
		<Group direction="column" position="center">
			<Header />
			<Space h="xss" />
			<Grid />
			<Space h="xs" />
			<Keyboard />
		</Group>
	);
};

export default Home;
