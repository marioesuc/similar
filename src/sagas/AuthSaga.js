// Saga file that manages all functions related to the Authentication on Firebase

import firebase from 'firebase';
import { put, takeLatest, call } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS
} from '../actions/types';

function* loginUser(action) {
  try {
    const auth = firebase.auth();
    yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.payload.email,
      action.payload.password
    );

    yield put({ type: LOGIN_USER_SUCCESS, payload: action.user });

    Actions.main();
  } catch (error) {
    yield put({ type: LOGIN_USER_FAIL });
  }
}


function* logoutUser(action) {

  try {
    const auth = firebase.auth();
    /*
		We have to save the result of the asynchronous call into a variable (even if it's not used)
		because that way we ensure that the code after that is not going to be executed until we have
		saved the variable.

		According to https://redux-saga.js.org/docs/api/ , the call has to be made by passing the context 
		(auth): call([context, fnName], ...args) , this way we are saying: this is the object where 
		you are going to get the methods from.
	*/
    const result = yield call(
      [auth, auth.signOut]
    );

    yield put({ type: LOGOUT_USER_SUCCESS });
	Actions.login();
  } catch (error) {
    console.log(error.message);
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(LOGOUT_USER, logoutUser);
}

export default authSaga;
