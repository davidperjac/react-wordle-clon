import { HiSun } from 'react-icons/hi';
import { RiMoonClearFill } from 'react-icons/ri';
import { ActionIcon } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/actions';

const ThemeButton = () => {
	const dark = useSelector((state) => state.dark);
	const dispatch = useDispatch();

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
