// These are the action creators associated to the authentication

import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER,
	LOGOUT_USER,
	CONFIRM_PASSWORD_CHANGED,
	REGISTER_USER
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const confirmPasswordChanged = (text) => {
	return {
		type: CONFIRM_PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return {
		type: LOGIN_USER,
		payload: { email, password }
	};
};


export const logoutUser = () => {
	return {
		type: LOGOUT_USER
	};	
};

export const registerUser = ({ email, password, confirmPassword }) => {
	return {
		type: REGISTER_USER,
		payload: { email, password, confirmPassword }
	};
};
