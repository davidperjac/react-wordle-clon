import { ADD_LETTER, SEND_WORD, SET_ERROR } from '../actions/types';
import { words } from '../../constants/words';

const initialState = {
	victory: false,
	searchWord: 'ADULT',
	guessWord: '',
	gridWords: [],
	error: false,
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
				gridWords:
					state.guessWord.length === 5 && words.includes(state.guessWord)
						? [...state.gridWords, state.guessWord]
						: [...state.gridWords],
				guessWord:
					state.guessWord.length === 5 && words.includes(state.guessWord)
						? ''
						: state.guessWord,
			};
		case SET_ERROR:
			return {
				...state,
				error: !state.error,
			};
		default:
			return { ...state };
	}
};

export default reacdleReducer;
