import { Group } from '@mantine/core';
import InfoButton from './InfoButton';
import StatsButton from './StatsButton';
import ThemeButton from './ThemeButton';
import GithubButton from './GithubButton';
import Name from './Name';

const Header = () => {
	return (
		<Group position="center" spacing="md" wra>
			<GithubButton />
			<InfoButton />
			<Name />
			<StatsButton />
			<ThemeButton />
		</Group>
	);
};

export default Header;
