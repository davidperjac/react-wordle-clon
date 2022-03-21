import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MantineProvider } from '@mantine/core';
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
			<App />
		</MantineProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
