import { AES, enc } from 'crypto-js';

const passphrase = '123';

export const encryptWithAES = (text) => {
	return AES.encrypt(text, passphrase).toString();
};

export const decryptWithAES = (ciphertext) => {
	const bytes = AES.decrypt(ciphertext, passphrase);
	const originalText = bytes.toString(enc.Utf8);
	return originalText;
};
