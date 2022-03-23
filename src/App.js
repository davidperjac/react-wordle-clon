import Home from './pages/Home';
import { MantineProvider } from '@mantine/core';
import { useSelector } from 'react-redux';

function App() {
	const theme = useSelector((state) => state.dark);
	return (
		<MantineProvider
			withGlobalStyles
			theme={{
				spacing: {
					xss: 3,
				},
				colorScheme: theme ? 'dark' : 'light',
			}}
		>
			<Home />
		</MantineProvider>
	);
}

export default App;
