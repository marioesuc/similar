// Saga file that manages all functions related to the Authentication on Firebase

import firebase from 'firebase';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  LOAD_VOCAB,
  LOAD_VOCAB_SUCCESS,
  UPDATE_LEARNED_VOCAB_WORDS,
  UPDATE_LEARNED_VOCAB_WORDS_SUCCESS,
  DELETE_LEARNED_VOCAB_WORDS
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
  let learnedVocabData = {};
  let unlearnedVocabData = {};
  let currentCard = {};
  let wordsList = [];
  let learnedWords;
  let progress = 0;

  try {
    const { currentUser } = firebase.auth();

    const vocabData = yield call(fetchData, '/vocab');

    learnedVocabData = yield call(fetchData, `/users/${currentUser.uid}/learnedVocabWords`);
   
      Object.keys(vocabData).forEach(key => {
        if (learnedVocabData) {
          if (Object.keys(learnedVocabData).includes(key)) {
            vocabDataPerUser[key] = { ...vocabData[key], success: learnedVocabData[key].success };
          } else {
            vocabDataPerUser[key] = { ...vocabData[key], success: undefined };
          }
        } else {
          learnedVocabData = {};
          vocabDataPerUser[key] = { ...vocabData[key], success: undefined };
        }
      });

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

        // We construct the object for unlearned words
        Object.keys(vocabData).forEach(key => {
          if (vocabDataPerUser[key].success === undefined || vocabDataPerUser[key].success === false) {
            unlearnedVocabData[key] = vocabData[key];
          }
        });

     if (Object.keys(unlearnedVocabData).length !== 0) {
        // We construct the object for the current card
        const randomPos = Math.floor(Math.random() * Object.keys(unlearnedVocabData).length);
        const randomObject = Object.keys(unlearnedVocabData)[randomPos];
    
        /*let answers = [
          vocabData[Object.keys(vocabData)[Math.floor(Math.random() * Object.keys(vocabData).length)]].sp,
          vocabData[Object.keys(vocabData)[Math.floor(Math.random() * Object.keys(vocabData).length)]].sp,
          vocabData[Object.keys(vocabData)[Math.floor(Math.random() * Object.keys(vocabData).length)]].sp,
          unlearnedVocabData[randomObject].sp
        ];*/
    
        let answers = [];
    
        answers.push(unlearnedVocabData[randomObject].sp);
    
        let randomAnswer;
    
        // Insert 3 random answers into the array
        for (let i = 0; i < 3; i++) {
          do {
            randomAnswer = vocabData[Object.keys(vocabData)[Math.floor(Math.random() * Object.keys(vocabData).length)]].sp;
          } while (answers.includes(randomAnswer));
    
          answers.push(randomAnswer);
        }
        
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
    }

    // We calculate the progress

    progress = (Object.keys(learnedVocabData).length * 100) / Object.keys(vocabDataPerUser).length;

    yield put({ type: LOAD_VOCAB_SUCCESS, payload: { progress, wordsList, currentCard } });
  } catch (error) {
    console.log(error.message);
  }
}

function* updateData(object) {
  const { currentUser } = firebase.auth();
  const ref = firebase.database().ref(`/users/${currentUser.uid}/learnedVocabWords`);
  const data = yield call([ref, ref.once], 'value');

  // If it doesn't exist
  if (data === null) {
    yield call([ref, ref.push], object);
  } else { //If it does exist
    yield call([ref, ref.update], object);
  }
}

function* updateLearnedVocabWords(action) {
  const eng = action.payload.eng;

  const newData = {};

  newData[eng] = {
      success: action.payload.success
    };

  try {
    yield call(updateData, newData);
    yield put({ type: UPDATE_LEARNED_VOCAB_WORDS_SUCCESS });
  } catch (error) {
  }
}

function* deleteLearnedVocabWords() {
  try {
    const { currentUser } = firebase.auth();
    const ref = firebase.database().ref(`/users/${currentUser.uid}`);
    yield call([ref, ref.remove]);
  } catch (error) {
  }
}


function* vocabSaga() {
  yield takeLatest(LOAD_VOCAB, loadVocabData);
  yield takeLatest(UPDATE_LEARNED_VOCAB_WORDS, updateLearnedVocabWords);
  yield takeLatest(DELETE_LEARNED_VOCAB_WORDS, deleteLearnedVocabWords);
}

export default vocabSaga;
