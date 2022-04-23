import { sharedText } from '../../constants/sharedText';
import { Space, Title, Button } from '@mantine/core';
import { useWords } from '../../hooks/useWords';
import { useMediaQuery } from '@mantine/hooks';
import { useClipboard } from '@mantine/hooks';
import { FaShareAlt } from 'react-icons/fa';
import ShareModal from './ShareModal';
import { useState } from 'react';

const ShareButton = () => {
	const isMobile = useMediaQuery('(max-width: 768px)');
	const [shareModal, setShareModal] = useState(false);
	const { gridWords, win, searchWord } = useWords();
	const clipboard = useClipboard({ timeout: 500 });

	const handleClick = () => {
		clipboard.copy(sharedText(win, gridWords, searchWord));
		setShareModal(true);
	};

	const buttonStyle = (theme) => ({
		backgroundColor: '#6ba964',
		'&:hover': {
			backgroundColor: '#83b57d',
		},
	});

	return (
		<>
			<ShareModal shareModal={shareModal} setShareModal={setShareModal} />
			<Button
				radius="sm"
				size={isMobile ? 'lg' : 'xl'}
				onClick={handleClick}
				sx={buttonStyle}
			>
				<Title order={3}>SHARE</Title>
				<Space w="sm" />
				<FaShareAlt />
			</Button>
		</>
	);
};

export default ShareButton;
