import { ADD_LETTER, CLEAN_WORDS, SEND_WORD } from '../actions/types';
import { getDayOfYear } from '../../utils/getDayOfYear';
import { words } from '../../constants/words';

const initialState = {
	searchWord: words[getDayOfYear()],
	gridWords: window.localStorage.getItem('GRID')
		? JSON.parse(window.localStorage.getItem('GRID'))
		: [],
	guessWord: '',
};

export const wordsReducer = (state = initialState, action) => {
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
		case CLEAN_WORDS:
			return {
				...state,
				gridWords: [],
			};
		default:
			return { ...state };
	}
};

export default wordsReducer;
