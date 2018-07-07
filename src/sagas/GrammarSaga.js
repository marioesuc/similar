// Saga file that manages all functions related to the Authentication on Firebase

import firebase from 'firebase';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  LOAD_GRAMMAR,
  LOAD_GRAMMAR_SUCCESS
} from '../actions/types';

function* fetchData(path) {
  const ref = firebase.database().ref(path);
  const data = yield call([ref, ref.once], 'value');
  return data.val();
}

// Function that manages the logic of the user login
function* loadGrammarData() {
  try {
    //const { currentUser } = firebase.auth();

    const grammarData = yield call(fetchData, '/grammar');

    const grammarDataArray = [];

    Object.keys(grammarData).forEach(key => {
      grammarDataArray.push({
        videoUrl: `https://www.youtube.com/embed/${key}`,
        picUrl: `https://img.youtube.com/vi/${key}/0.jpg`,
        title: grammarData[key].title,
        desc: grammarData[key].desc,
        order: grammarData[key].order
      });
    });

    // We order by the order field
    grammarDataArray.sort((a, b) => { 
        return a.order - b.order;
    });

    yield put({ type: LOAD_GRAMMAR_SUCCESS, payload: grammarDataArray });
  } catch (error) {
    console.log(error.message);
  }
}


function* grammarSaga() {
  yield takeLatest(LOAD_GRAMMAR, loadGrammarData);
}

export default grammarSaga;
