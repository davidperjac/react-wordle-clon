import { Group, Title, ThemeIcon, Modal } from '@mantine/core';
import { useError } from '../../hooks/useError';
import { setError } from '../../redux/actions';
import { MdError } from 'react-icons/md';
import { useEffect } from 'react';

const ErrorModal = () => {
	const { error, open, dispatch } = useError();

	useEffect(() => {
		if (open) {
			setTimeout(function () {
				dispatch(setError(''));
			}, 3000);
		}
	}, [dispatch, open]);

	return (
		<Modal
			opened={open}
			overlayOpacity={0}
			transition="scale"
			radius="md"
			size="xss"
			withCloseButton={false}
			trapFocus={false}
			closeOnEscape={false}
			closeOnClickOutside={false}
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
