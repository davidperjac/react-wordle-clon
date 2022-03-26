import { useSelector, useDispatch } from 'react-redux';

export const useTheme = () => {
	const dark = useSelector((state) => state.dark.dark);
	const dispatch = useDispatch();

	return {
		dark,
		dispatch,
	};
};
