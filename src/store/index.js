import { createStore, applyMiddleware } from 'redux';
import createSadaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSadaMiddleware(sagaMonitor);

const middleware = [
  sagaMiddleware,
];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
