import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import { helloSaga } from './components/landing.saga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(helloSaga)


export default store
