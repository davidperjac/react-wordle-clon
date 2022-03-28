import changeThemeReducer from './changeThemeReducer';
import finishGameReducer from './finishGameReducer';
import setErrorReducer from './setErrorReducer';
import wordsReducer from './wordsReducer';
import addLetterColorReducer from './addLetterColorReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	end: finishGameReducer,
	words: wordsReducer,
	error: setErrorReducer,
	dark: changeThemeReducer,
	letterColors: addLetterColorReducer,
});

export default rootReducer;
