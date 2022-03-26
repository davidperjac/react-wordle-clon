import { ADD_LETTER } from '../actions/types';

const initialState = {
	guessWord: '',
};

export const addLetterReducer = (state = initialState, action) => {
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
		default:
			return { ...state };
	}
};

export default addLetterReducer;
