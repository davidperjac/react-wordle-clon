import { combineReducers } from 'redux';
import addLetterReducer from './addLetterReducer';
import changeThemeReducer from './changeThemeReducer';
import finishGameReducer from './finishGameReducer';
import sendWordReducer from './sendWordReducer';
import setErrorReducer from './setErrorReducer';
import searchWordReducer from './searchWordReducer';

export const rootReducer = combineReducers({
	end: finishGameReducer,
	searchWord: searchWordReducer,
	guessWord: addLetterReducer,
	gridWords: sendWordReducer,
	error: setErrorReducer,
	dark: changeThemeReducer,
});

export default rootReducer;
