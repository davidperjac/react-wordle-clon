import { ADD_LETTER, SEND_WORD, SET_ERROR } from '../actions/types';

const initialState = {
	victory: false,
	searchWord: 'ADULT',
	guessWord: '',
	gridWords: [],
	error: '',
};

export const reacdleReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_LETTER:
			return {
				...state,
				guessWord:
					action.payload === 'BACKSPACE'
						? state.guessWord.slice(0, -1)
						: state.guessWord.length < 5
						? (state.guessWord += action.payload)
						: state.guessWord,
			};
		case SEND_WORD:
			return {
				...state,
				gridWords: [...state.gridWords, state.guessWord],
				guessWord: '',
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return { ...state };
	}
};

export default reacdleReducer;
