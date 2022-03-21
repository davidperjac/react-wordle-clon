import { Title, Group } from '@mantine/core';
import { useState } from 'react';
import InfoModal from './InfoModal';
import InfoButton from './InfoButton';
import StatsButton from './StatsButton';
import ThemeButton from './ThemeButton';

const Header = () => {
	const [infoModal, setInfoModal] = useState(false);
	return (
		<>
			<InfoModal infoModal={infoModal} setInfoModal={setInfoModal} />
			<Group position="center" spacing="xl">
				<InfoButton setInfoModal={setInfoModal} />
				<Title order={1} align="center">
					REACDLE
				</Title>
				<StatsButton />
				<ThemeButton />
			</Group>
		</>
	);
};

export default Header;
