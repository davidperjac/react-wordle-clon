import keys from '../constants/keys';
import { Group, Space } from '@mantine/core';
import Letter from './Letter';
import { useEffect } from 'react';

const Keyboard = () => {
	useEffect(() => {
		window.addEventListener('keydown', (event) => {
			console.log(event.key);
		});
	}, []);

	return (
		<Group direction="column" spacing="xs">
			{keys.map((row, rowIndex) => {
				return (
					<Group spacing="xss" key={rowIndex}>
						{rowIndex > 0 && <Space w="md" />}
						{row.map((letter, letterIndex) => {
							return <Letter letter={letter} key={letterIndex} />;
						})}
					</Group>
				);
			})}
		</Group>
	);
};

export default Keyboard;
