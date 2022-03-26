import { FINISH_GAME } from '../actions/types';

const initialState = {
	end: false,
};

export const finishGameReducer = (state = initialState, action) => {
	switch (action.type) {
		case FINISH_GAME:
			return {
				...state,
				end: !state.end,
			};
		default:
			return { ...state };
	}
};

export default finishGameReducer;
