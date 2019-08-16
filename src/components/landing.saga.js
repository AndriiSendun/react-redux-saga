import { call, put, takeEvery, all } from 'redux-saga/effects';
import { Action } from 'redux';

const Api = {
  fetchUser: () => 'fetch'
}

// export function* helloSaga(): IterableIterator<void> {
//   console.log('Hello Sagas!')
// }

// export function* fetchData(action: Action): IterableIterator<Action> {
//   try {
//     const data = yield call(Api.fetchUser, action)
//     yield put({type: 'FETCH_SUCCEEDED', data})
//   } catch (error) {
//     yield put({type: 'FETCH_SUCCEEDED', error})
//   }
// }

// function* watchFetchData() {
//   yield takeEvery('FETCH_REQUESTED', 'https://jsonplaceholder.typicode.com/users')
// }

export function* helloSaga() {
  console.log('Hello Sagas!')
}

function* fetchData(action) {
  try {
    const data = yield call(Api.fetchUser, action)
    yield put({type: 'FETCH_SUCCEEDED', payload: data})
  } catch (error) {
    yield put({type: 'FETCH_FAIL', payload: error})
  }
}

function* watchFetchData() {
  yield takeEvery('FETCH_REQUESTED', fetchData)
}


export function* rootSaga() {
  yield all([
    helloSaga(),
    watchFetchData()
  ])
}
