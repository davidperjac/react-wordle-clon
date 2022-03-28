import { useMediaQuery } from '@mantine/hooks';
import { Group, Space } from '@mantine/core';
import keys from '../../constants/keys';
import ErrorModal from './ErrorModal';
import Letter from './Letter';

const Keyboard = () => {
	const isMobile = useMediaQuery('(max-width: 768px)');
	return (
		<>
			<ErrorModal />
			<Group direction="column" spacing="xs">
				{keys.map((row, rowIndex) => {
					return (
						<Group spacing={isMobile ? 'xssT' : 'xss'} key={rowIndex} noWrap>
							{rowIndex > 0 && <Space w={isMobile ? 'md' : 'lg'} />}
							{row.map((letter, letterIndex) => {
								return (
									rowIndex < 3 && <Letter letter={letter} key={letterIndex} />
								);
							})}
						</Group>
					);
				})}
			</Group>
		</>
	);
};

export default Keyboard;
