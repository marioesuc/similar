// Saga file that manages all functions related to the register on Firebase

import firebase from 'firebase';
import { put, takeLatest, call } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from '../actions/types';

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

function* registerSaga() {
  yield takeLatest(REGISTER_USER, registerUser);
}

export default registerSaga;
