// These are the action creators associated to the register

import { 
	REGISTER_EMAIL_CHANGED,
	REGISTER_PASSWORD_CHANGED,
	REGISTER_CONFIRM_PASSWORD_CHANGED,
	REGISTER_USER
} from './types';

export const registerEmailChanged = (text) => {
	return {
		type: REGISTER_EMAIL_CHANGED,
		payload: text
	};
};

export const registerPasswordChanged = (text) => {
	return {
		type: REGISTER_PASSWORD_CHANGED,
		payload: text
	};
};

export const registerConfirmPasswordChanged = (text) => {
	return {
		type: REGISTER_CONFIRM_PASSWORD_CHANGED,
		payload: text
	};
};

export const registerUser = ({ email, password, confirmPassword }) => {
	return {
		type: REGISTER_USER,
		payload: { email, password, confirmPassword }
	};
};
