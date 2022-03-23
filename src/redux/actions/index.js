import { ADD_LETTER, SEND_WORD, SET_ERROR, CHANGE_THEME } from './types';

export const addLetter = (payload) => ({
	type: ADD_LETTER,
	payload,
});

export const sendWord = () => ({
	type: SEND_WORD,
});

export const setError = (payload) => ({
	type: SET_ERROR,
	payload,
});

export const changeTheme = () => ({
	type: CHANGE_THEME,
});
