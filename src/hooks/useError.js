import { useSelector, useDispatch } from 'react-redux';

export const useError = () => {
	const open = useSelector((state) => state.error.error).length > 0;
	const error = useSelector((state) => state.error.error);
	const dispatch = useDispatch();

	return {
		open,
		error,
		dispatch,
	};
};
