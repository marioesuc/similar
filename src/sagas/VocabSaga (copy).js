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

// Function that manages the logic of the user login
function* loadVocabData() {
  try {
    const { currentUser } = firebase.auth();


    let vocabData = {};
    let vocabDataPerUser = {};
    let unlearnedVocabData = {};
    let currentCard = [];
    let wordsList = [];
    let learnedWords;
    let vocabSuccess = undefined;
    let progress = 0;

    firebase.database().ref('/vocab')
          // Con 'value' decimos que queremos obtener el valor en esa ubicación
          // snapshot será el objeto JSON con la lista de mepleados asociados al usuario
          .once('value', word => {
            vocabData = word.val();
          }).then(() => {
              firebase.database().ref('users')
              .once('value', root => { 
                // Updates the vocabSuccess variable in case the user has any kind of progress
                if (root.hasChild(`${currentUser.uid}`)) {
                  firebase.database().ref(`/users/${currentUser.uid}/learnedVocabWords`)
                    .once('value', learnedVocabWord => {
                      vocabSuccess = learnedVocabWord.val();
                    });
                } 

                // If the user hasn't made any progress yet
                if (vocabSuccess === undefined) {
                  Object.keys(vocabData).forEach(key => {
                      vocabDataPerUser[key] = { ...vocabData[key], success: undefined };
                  });
                } else { //If the use has made some progress
                  console.log('');
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

                currentCard.push({
                  eng: randomObject,
                  pron: unlearnedVocabData[randomObject].pron,
                  sp: unlearnedVocabData[randomObject].sp,
                  opt1: answers[0],
                  opt2: answers[1],
                  opt3: answers[2],
                  opt4: answers[3]
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

                // We calculate the progress
                learnedWords = Object.keys(vocabDataPerUser).length - Object.keys(unlearnedVocabData).length; 

                //progress = (learnedWords * 100) / Object.keys(vocabDataPerUser).length;
                progress = 25;
              });
          });
    yield put({ type: LOAD_VOCAB_SUCCESS, payload: { progress, wordsList, currentCard } });
    console.log('VocabSaga');
    console.log(JSON.stringify(progress));
    console.log(JSON.stringify(wordsList));
    console.log(JSON.stringify(currentCard));

  } catch (error) {
    console.log(error.message);
  }
}


function* vocabSaga() {
  yield takeLatest(LOAD_VOCAB, loadVocabData);
}

export default vocabSaga;
