import { AES, enc } from 'crypto-js';

const passphrase = process.env.REACT_APP_PASS_PHRASE;

export const encryptWithAES = (text) => {
	return AES.encrypt(text, passphrase).toString();
};

export const decryptWithAES = (ciphertext) => {
	const bytes = AES.decrypt(ciphertext, passphrase);
	const originalText = bytes.toString(enc.Utf8);
	return originalText;
};
