import {
	ADD_LETTER,
	SEND_WORD,
	SET_ERROR,
	CHANGE_THEME,
	FINISH_GAME,
	CLEAN_WORDS,
	ADD_LETTER_COLOR,
} from './types';

export const addLetterColor = (payload) => ({
	type: ADD_LETTER_COLOR,
	payload,
});

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

export const finishGame = () => ({
	type: FINISH_GAME,
});

export const cleanWords = () => ({
	type: CLEAN_WORDS,
});
