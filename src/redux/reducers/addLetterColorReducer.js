import { ADD_LETTER_COLOR } from '../actions/types';

const initialState = {
	letterColors: [],
};

export const addLetterColorReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_LETTER_COLOR:
			return {
				...state,
				letterColors: state.letterColors.some(
					(letterColor) => letterColor.letter === action.payload.letter
				)
					? Array.from(
							new Set(
								[...state.letterColors, action.payload].map(JSON.stringify)
							)
					  ).map(JSON.parse)
					: [...state.letterColors, action.payload],
			};
		default:
			return { ...state };
	}
};

export default addLetterColorReducer;
