import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGOUT_USER
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
