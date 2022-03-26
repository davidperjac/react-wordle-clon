import { SEND_WORD } from '../actions/types';

const initialState = {
	guessWord: '',
	gridWords: window.localStorage.getItem('GRID')
		? JSON.parse(window.localStorage.getItem('GRID'))
		: [],
};

export const sendWordReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_WORD:
			return {
				...state,
				gridWords: [...state.gridWords, state.guessWord],
				guessWord: '',
			};
		default:
			return { ...state };
	}
};

export default sendWordReducer;
