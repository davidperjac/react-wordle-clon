import { CLEAN_WORDS } from '../actions/types';

const initialState = {
	gridWords: window.localStorage.getItem('GRID')
		? JSON.parse(window.localStorage.getItem('GRID'))
		: [],
};

export const cleanWordsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CLEAN_WORDS:
			return {
				...state,
				gridWords: [],
			};
		default:
			return { ...state };
	}
};

export default cleanWordsReducer;
