import { Group } from '@mantine/core';
import { useState } from 'react';
import InfoModal from './InfoModal';
import InfoButton from './InfoButton';
import StatsButton from './StatsButton';
import ThemeButton from './ThemeButton';
import Name from './Name';

const Header = () => {
	const [infoModal, setInfoModal] = useState(false);
	return (
		<>
			<InfoModal infoModal={infoModal} setInfoModal={setInfoModal} />
			<Group position="center" spacing="xl">
				<InfoButton setInfoModal={setInfoModal} />
				<Name />
				<StatsButton />
				<ThemeButton />
			</Group>
		</>
	);
};

export default Header;
