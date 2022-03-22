import { Group, Space, Dialog, Text } from '@mantine/core';
import { useKeyboardPress } from '../../utils/useKeyboardPress';
import keys from '../../constants/keys';
import Letter from './Letter';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../../redux/actions';

//TODO: CREATE A NOTIFICATIONS SYSTEM

const Keyboard = () => {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.error);

	useKeyboardPress();
	return (
		<>
			<Dialog
				opened={error}
				withCloseButton
				onClose={() => dispatch(setError())}
				size="lg"
				radius="md"
			>
				<Text size="sm" style={{ marginBottom: 10 }} weight={500}>
					Subscribe to email newsletter
				</Text>
			</Dialog>
			<Group direction="column" spacing="xs">
				{keys.map((row, rowIndex) => {
					return (
						<Group spacing="xss" key={rowIndex}>
							{rowIndex > 0 && <Space w="lg" />}
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
