import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { requestDog, requestDogSuccess, requestDogError } from './actions';

const initialState = {
    users: [
        {id: 1, username: 'User 1', count: 1},
        {id: 2, username: 'UseR 2', count: 1},
        {id: 3, username: 'User Longname 3', count: 1}
    ],
    apiData: {
        url: '',
        loading: false,
        error: false,
    }
};
/*
const initialState = {
    url: '',
    loading: false,
    error: false,
};
*/
const userReducer = (state = initialState, action) => {
    if (action.type === 'USER_CLICKED') {
        const i = state.users.findIndex((e) => { return e.id === action.data.id });
        // TODO: it's not working if other ways to get immutable objects
        // const users = Object.assign({}, state.users);
        // const { users } = state;
        const users = JSON.parse(JSON.stringify(state.users));
        users[i].count++;
        console.log('userReducer: USER_CLICKED', i, action, state, users);
        return {...state, users};
    }
    let apiData = initialState.apiData;
    switch (action.type) {
        case 'REQUESTED_DOG':
            apiData = {
                url: '',
                loading: true,
                error: false,
            };
            break;
        case 'REQUESTED_DOG_SUCCEEDED':
            apiData = {
                url: action.url,
                loading: false,
                error: false,
            };
            break;
        case 'REQUESTED_DOG_FAILED':
            apiData = {
                url: '',
                loading: false,
                error: true,
            };
            break;
        default:
            // return state;
    }
console.log('!!!', {...state, apiData});
    return {...state, apiData};
}

// Actions

// Sagas
function* watchFetchDog(obj) {
    console.log('watchFetchDog', obj);
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

function* fetchDogAsync() {
    try {
        yield put(requestDog());
        const data = yield call(() => {
            return fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
            }
        );
        console.log('fetch:', data);
        yield put(requestDogSuccess(data));
    } catch (error) {
        yield put(requestDogError());
    }
}

const sagaMiddleware = createSagaMiddleware();
var store = createStore(userReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchDog);

export default store;


