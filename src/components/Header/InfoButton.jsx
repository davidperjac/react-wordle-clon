import { ActionIcon, Tooltip } from '@mantine/core';
import { BiHelpCircle } from 'react-icons/bi';
import InfoModal from './InfoModal';
import { useState } from 'react';

const InfoButton = () => {
	const [infoModal, setInfoModal] = useState(false);
	return (
		<>
			<InfoModal infoModal={infoModal} setInfoModal={setInfoModal} />
			<Tooltip label="Info" withArrow>
				<ActionIcon variant="transparent" onClick={() => setInfoModal(true)}>
					<BiHelpCircle size={30} />
				</ActionIcon>
			</Tooltip>
		</>
	);
};

export default InfoButton;
