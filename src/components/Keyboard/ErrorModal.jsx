import { Group, Title, ThemeIcon, Modal } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../../redux/actions';
import { MdError } from 'react-icons/md';

const ErrorModal = () => {
	const open = useSelector((state) => state.error).length > 0;
	const error = useSelector((state) => state.error);
	const dispatch = useDispatch();

	if (open) {
		setTimeout(function () {
			dispatch(setError(''));
		}, 3000);
	}

	return (
		<Modal
			opened={open}
			overlayOpacity={0}
			transition="scale"
			radius="md"
			onClose={() => dispatch(setError(''))}
			size="xss"
			withCloseButton={false}
			trapFocus={false}
			styles={{
				modal: {
					backgroundColor: '#FA5252',
					color: 'white',
				},
			}}
		>
			<Group>
				<ThemeIcon color="red">
					<MdError />
				</ThemeIcon>
				<Title order={5}>{error}</Title>
			</Group>
		</Modal>
	);
};

export default ErrorModal;
