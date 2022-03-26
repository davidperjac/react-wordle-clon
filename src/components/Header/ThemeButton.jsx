import { HiSun } from 'react-icons/hi';
import { RiMoonClearFill } from 'react-icons/ri';
import { ActionIcon } from '@mantine/core';
//import { useLocalStorage } from '../../hooks/useLocalStorage';
import { changeTheme } from '../../redux/actions';
import { useTheme } from '../../hooks/useTheme';

const ThemeButton = () => {
	const { dark, dispatch } = useTheme();
	//] = useLocalStorage('THEME', null);

	const handleClick = () => {
		dispatch(changeTheme());
	};

	return (
		<ActionIcon color="purple" variant="light" onClick={handleClick}>
			{dark ? <RiMoonClearFill size={30} /> : <HiSun size={30} />}
		</ActionIcon>
	);
};

export default ThemeButton;
