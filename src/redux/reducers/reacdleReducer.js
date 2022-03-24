import {
	ADD_LETTER,
	CHANGE_THEME,
	SEND_WORD,
	SET_ERROR,
	FINISH_GAME,
} from '../actions/types';

const initialState = {
	end: false,
	searchWord: 'ADULT',
	guessWord: '',
	gridWords: [],
	error: '',
	dark:
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches,
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
		case CHANGE_THEME:
			return {
				...state,
				dark: !state.dark,
			};
		case FINISH_GAME:
			return {
				...state,
				end: !state.end,
			};
		default:
			return { ...state };
	}
};

export default reacdleReducer;
