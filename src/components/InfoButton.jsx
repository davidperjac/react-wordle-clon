import { BiHelpCircle } from 'react-icons/bi';
import { ActionIcon, Tooltip } from '@mantine/core';

const InfoButton = ({ setInfoModal }) => {
	return (
		<Tooltip label="Info" withArrow>
			<ActionIcon
				color="purple"
				variant="light"
				onClick={() => setInfoModal(true)}
			>
				<BiHelpCircle size={30} />
			</ActionIcon>
		</Tooltip>
	);
};

export default InfoButton;
