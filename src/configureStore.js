import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

import dataSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(dataSaga);
  return store;
}
