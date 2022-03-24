import Home from './pages/Home';
import { MantineProvider } from '@mantine/core';
import { useSelector } from 'react-redux';

function App() {
	const theme = useSelector((state) => state.dark);
	const styles = {
		spacing: {
			xss: 5,
			xssT: 3,
		},
		colorScheme: theme ? 'dark' : 'light',
	};
	return (
		<MantineProvider withGlobalStyles theme={styles}>
			<Home />
		</MantineProvider>
	);
}

export default App;
