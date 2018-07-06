// The file which combines all sagas

import { fork } from 'redux-saga/effects';
import authSaga from './AuthSaga';
import registerSaga from './RegisterSaga';
import vocabSaga from './VocabSaga';

export default function* root() {
	// The fork method is used to avoid blocking calls to each saga
    yield [
        fork(authSaga),
        fork(registerSaga),
        fork(vocabSaga)
    ];
}
