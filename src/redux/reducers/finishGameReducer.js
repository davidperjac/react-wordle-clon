import { FINISH_GAME, OPEN_STATS } from '../actions/types';

const initialState = {
	end: false,
	stats: false,
};

export const finishGameReducer = (state = initialState, action) => {
	switch (action.type) {
		case FINISH_GAME:
			return {
				...state,
				end: !state.end,
			};
		case OPEN_STATS:
			return {
				...state,
				stats: !state.stats,
			};
		default:
			return { ...state };
	}
};

export default finishGameReducer;
