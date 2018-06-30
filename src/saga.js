import firebase from 'firebase';
import { put, takeEvery, call } from 'redux-saga/effects';
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './actions/types';

function* loginUser(action) {
  try {
    const auth = firebase.auth();
    yield call(
      [auth, auth.createUserWithEmailAndPassword],
      action.payload.email,
      action.payload.password
    );

    yield put({ type: LOGIN_USER_SUCCESS, payload: action.user });
  } catch (error) {
    yield put({ type: LOGIN_USER_FAIL });
  }
}

function* dataSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export default dataSaga;
