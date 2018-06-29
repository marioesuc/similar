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
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))

		.catch((error) => {
			/*Este console.log está puesto porque si hay algo mal en el reducer llamado por
			loginUserSuccess (por ejemplo una variable no declarada), dará un error
			y en lugar de que el compilador nos lo diga, lo va  ejecutar y va a entrar
			en el catch, así que la única forma que tenemos de ver qué ocurre es así*/
			console.log(error);

			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));
		});
	};
};

const loginUserFail = (dispatch => {
	dispatch({ type: LOGIN_USER_FAIL });
});


const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
};

const logoutUserSuccess = (dispatch) => {
	dispatch({ type: LOGOUT_USER });
};

export const logoutUser = () => {
	return (dispatch) => {
		firebase.auth().signOut()
		.then(() => {
			logoutUserSuccess(dispatch);
			Actions.login();
		});
	};		
};
