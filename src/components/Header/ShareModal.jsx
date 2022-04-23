import { Group, Title, Modal } from '@mantine/core';

const ShareModal = ({ shareModal, setShareModal }) => {
	return (
		<Modal
			transitionDuration={200}
			withCloseButton={false}
			closeOnEscape={false}
			overlayOpacity={0}
			trapFocus={false}
			transition="pop"
			opened={shareModal}
			radius="sm"
			size="xss"
			onClose={() => setShareModal(false)}
			styles={{
				modal: {
					backgroundColor: 'black',
					color: 'white',
					top: '30px',
				},
			}}
		>
			<Group>
				<Title order={5}>Copied to Clipboard!</Title>
			</Group>
		</Modal>
	);
};

export default ShareModal;
