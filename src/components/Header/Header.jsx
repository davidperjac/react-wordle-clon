import { Group } from '@mantine/core';
import InfoButton from './InfoButton';
import StatsButton from './StatsButton';
import ThemeButton from './ThemeButton';
import Name from './Name';

//TODO: ADD DARK MODE Y STATS MODAL

const Header = () => {
	return (
		<Group position="center" spacing="xl">
			<InfoButton />
			<Name />
			<StatsButton />
			<ThemeButton />
		</Group>
	);
};

export default Header;
