import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<MantineProvider
			theme={{
				spacing: {
					xss: 3,
				},
			}}
		>
			<Provider store={store}>
				<App />
			</Provider>
		</MantineProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
