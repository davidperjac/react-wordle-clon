import { BiHelpCircle } from 'react-icons/bi';
import { ActionIcon, Tooltip } from '@mantine/core';
import InfoModal from './InfoModal';
import { useState } from 'react';

const InfoButton = () => {
	const [infoModal, setInfoModal] = useState(false);
	return (
		<>
			<InfoModal infoModal={infoModal} setInfoModal={setInfoModal} />
			<Tooltip label="Info" withArrow>
				<ActionIcon
					color="purple"
					variant="light"
					onClick={() => setInfoModal(true)}
				>
					<BiHelpCircle size={30} />
				</ActionIcon>
			</Tooltip>
		</>
	);
};

export default InfoButton;
