import { useLocalStorage } from '../../hooks/useLocalStorage';
import { changeTheme } from '../../redux/actions';
import { RiMoonClearFill } from 'react-icons/ri';
import { useTheme } from '../../hooks/useTheme';
import { ActionIcon } from '@mantine/core';
import { HiSun } from 'react-icons/hi';

const ThemeButton = () => {
	const { dark, dispatch } = useTheme();
	const [, setDarkStorage] = useLocalStorage('THEME', '');

	const handleClick = () => {
		setDarkStorage(!dark);
		dispatch(changeTheme());
	};

	return (
		<ActionIcon variant="transparent" onClick={handleClick}>
			{dark ? <RiMoonClearFill size={30} /> : <HiSun size={30} />}
		</ActionIcon>
	);
};

export default ThemeButton;
