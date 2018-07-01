// Saga file that manages all functions related to the Authentication on Firebase

import firebase from 'firebase';
import { put, takeLatest, call } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from '../actions/types';

// Function that manages the logic of the user login
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

// Function that manages the logic of the user logout
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

// Function that manages the logic of the user register
function* registerUser(action) {
  try {
    const auth = firebase.auth();
    const { email, password, confirmPassword } = action.payload;

    // We check that the passwords match
    if (password !== confirmPassword) {
      // If not, we throw a controlled exception
      throw new Error('Las contraseñas introducidas no coinciden');
    }

    // If everything's OK, we create the account on Firebase
    yield call(
      [auth, auth.createUserWithEmailAndPassword], email, password);

    // Show up a message saying that everything went alright
    Alert.alert('Registro completado',
      'Introduzca sus nuevas credenciales en la pantalla de inicio',
      [
        {
          text: 'OK',
          onPress: () => Actions.login()
        }
      ],
      { cancelable: false }
    );

    // And dispatch a register success action
    yield put({ type: REGISTER_USER_SUCCESS });
  } catch (error) {
    yield put({ type: REGISTER_USER_FAIL, payload: error.message });
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(LOGOUT_USER, logoutUser);
  yield takeLatest(REGISTER_USER, registerUser);
}

export default authSaga;
