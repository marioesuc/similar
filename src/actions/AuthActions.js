// These are the action creators associated to the authentication

import { 
	LOGIN_EMAIL_CHANGED,
	LOGIN_PASSWORD_CHANGED,
	LOGIN_USER,
	LOGOUT_USER
} from './types';

export const loginEmailChanged = (text) => {
	return {
		type: LOGIN_EMAIL_CHANGED,
		payload: text
	};
};

export const loginPasswordChanged = (text) => {
	return {
		type: LOGIN_PASSWORD_CHANGED,
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
