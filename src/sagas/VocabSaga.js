// Saga file that manages all functions related to the Authentication on Firebase

import firebase from 'firebase';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  LOAD_VOCAB,
  LOAD_VOCAB_SUCCESS
} from '../actions/types';

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function* fetchData(path) {
  const ref = firebase.database().ref(path);
  const data = yield call([ref, ref.once], 'value');
  return data.val();
}

// Function that manages the logic of the user login
function* loadVocabData() {
  let vocabSuccess = undefined;
  let vocabDataPerUser = {};
  let unlearnedVocabData = {};
  let currentCard = {};
  let wordsList = [];
  let learnedWords;
  let progress = 0;

  try {
    const { currentUser } = firebase.auth();

    const vocabData = yield call(fetchData, '/vocab');

    const usersData = yield call(fetchData, '/users');

    if (currentUser in Object.keys(usersData)) {
      console.log('Sí está');
    } else {
      Object.keys(vocabData).forEach(key => {
        vocabDataPerUser[key] = { ...vocabData[key], success: undefined };
      });
    }

    // We construct the object for unlearned words
    Object.keys(vocabData).forEach(key => {
      if (vocabDataPerUser[key].success === undefined || vocabDataPerUser[key].success === false) {
        unlearnedVocabData[key] = vocabData[key];
      }
    });

    // We construct the object for the current card
    const randomPos = Math.floor(Math.random() * Object.keys(unlearnedVocabData).length);
    const randomObject = Object.keys(unlearnedVocabData)[randomPos];

    let answers = [
      vocabData[Object.keys(vocabData)[Math.floor(Math.random() * Object.keys(vocabData).length)]].sp,
      vocabData[Object.keys(vocabData)[Math.floor(Math.random() * Object.keys(vocabData).length)]].sp,
      vocabData[Object.keys(vocabData)[Math.floor(Math.random() * Object.keys(vocabData).length)]].sp,
      unlearnedVocabData[randomObject].sp
    ];

    answers = shuffle(answers);

    currentCard = {
      eng: randomObject,
      pron: unlearnedVocabData[randomObject].pron,
      sp: unlearnedVocabData[randomObject].sp,
      opt1: answers[0],
      opt2: answers[1],
      opt3: answers[2],
      opt4: answers[3]
    };

    // We construct the wordsList array
    Object.keys(vocabDataPerUser).forEach(key => {
        let success = '';
        if (vocabDataPerUser[key].success === true) {
          success = '\u2714';
        } else if (vocabDataPerUser[key].success === false) {
          success = '\u2715';
        } 
          wordsList.push({
            col1: key,
            col2: vocabDataPerUser[key].sp,
            col3: success
          });
    });

    // We calculate the progress
    learnedWords = Object.keys(vocabDataPerUser).length - Object.keys(unlearnedVocabData).length; 

    progress = (learnedWords * 100) / Object.keys(vocabDataPerUser).length;

    yield put({ type: LOAD_VOCAB_SUCCESS, payload: { progress, wordsList, currentCard } });
  } catch (error) {
    console.log(error.message);
  }
}


function* vocabSaga() {
  yield takeLatest(LOAD_VOCAB, loadVocabData);
}

export default vocabSaga;
