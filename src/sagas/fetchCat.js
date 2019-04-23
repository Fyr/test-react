import { put, call } from 'redux-saga/effects';
import { requestCat, requestCatSuccess, requestCatError } from '../actions';

export function* fetchCatAsync() {
    try {
        yield put(requestCat());
        const data = yield call(() => {
            return fetch('https://api.thecatapi.com/v1/images/search?size=full')
                .then(res => res.json());
        });
        yield put(requestCatSuccess(data));
    } catch (error) {
        yield put(requestCatError(error));
    }
}

