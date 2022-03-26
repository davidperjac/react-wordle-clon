import { CHANGE_THEME } from '../actions/types';

const initialState = {
	dark:
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches,
};

export const changeThemeReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			return {
				...state,
				dark: !state.dark,
			};
		default:
			return { ...state };
	}
};

export default changeThemeReducer;
