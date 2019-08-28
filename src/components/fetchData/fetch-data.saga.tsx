import { call, put, all, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchWatcher() {
    yield takeEvery('FETCH', fetchSaga)
}

function axiosFetch(url: string): Promise<any> {
    return axios(url).then(response => response.data);
}

function* fetchSaga() {
    const [ users, post ] = yield all([
        call(axiosFetch, 'https://jsonplaceholder.typicode.com/users'),
        call(axiosFetch, 'https://jsonplaceholder.typicode.com/posts/2'),
    ]);

    console.log(users, post);
}

export {
    fetchWatcher,
}