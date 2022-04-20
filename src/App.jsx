import { MantineProvider } from '@mantine/core';
import { useTheme } from './hooks/useTheme';
import Home from './pages/Home';

function App() {
	const { dark } = useTheme();
	const styles = {
		spacing: {
			xxl: 50,
			xss: 5,
			xssT: 3,
		},
		colorScheme: dark ? 'dark' : 'light',
	};
	return (
		<MantineProvider withGlobalStyles theme={styles}>
			<Home />
		</MantineProvider>
	);
}

export default App;
