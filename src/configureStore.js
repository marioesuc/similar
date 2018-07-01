//File that sets the proper store configuration which is going to be given to the Provider tag
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

import root from './sagas';

const sagaMiddleware = createSagaMiddleware();

//createStore: Parameters explained
//1. Set of reducers
//2. Initial State in case we needed it (not necessary)
//3. Additional functionality added to the Store (in case of middlewares)

const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(root);

export default store;
