import { Space, Title, Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { FaShareAlt } from 'react-icons/fa';
import ShareModal from './ShareModal';
import { useState } from 'react';

const ShareButton = () => {
	const [shareModal, setShareModal] = useState(false);
	const clipboard = useClipboard({ timeout: 500 });

	const handleClick = () => {
		clipboard.copy('AMO A VALERIA');
		setShareModal(true);
	};

	return (
		<>
			<ShareModal shareModal={shareModal} setShareModal={setShareModal} />
			<Button
				radius="sm"
				size="xl"
				onClick={handleClick}
				sx={(theme) => ({
					backgroundColor: '#6ba964',
					'&:hover': {
						backgroundColor: '#83b57d',
					},
				})}
			>
				<Title order={3}>SHARE</Title>
				<Space w="sm" />
				<FaShareAlt />
			</Button>
		</>
	);
};

export default ShareButton;
