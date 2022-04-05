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
			}, 1500);
		}
	}, [dispatch, open]);

	return (
		<Modal
			closeOnClickOutside={false}
			transitionDuration={200}
			withCloseButton={false}
			closeOnEscape={false}
			overlayOpacity={0}
			trapFocus={false}
			transition="pop"
			opened={open}
			radius="md"
			size="xss"
			styles={{
				modal: {
					backgroundColor: '#FA5252',
					color: 'white',
					top: '30px',
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
