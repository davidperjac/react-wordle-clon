import { words } from '../../constants/words';
import { getDayOfYear } from '../../utils/getDayOfYear';

const initialState = {
	searchWord: words[getDayOfYear()],
};

export const searchWordReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return { ...state };
	}
};

export default searchWordReducer;
