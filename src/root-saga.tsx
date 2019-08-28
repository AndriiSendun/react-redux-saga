import { all } from 'redux-saga/effects';

import { watchFetchData } from './components/landing/landing.saga';
import { fetchWatcher } from './components/fetchData/fetch-data.saga';

export function* rootSaga() {
    yield all([
      watchFetchData(),
      fetchWatcher(),
    ])
  }