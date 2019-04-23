import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { requestDog, requestDogSuccess, requestDogError, requestCat, requestCatSuccess, requestCatError } from './actions';

const initialStateUsers = {
    users: [
        {id: 1, username: 'User 1', count: 1},
        {id: 2, username: 'UseR 2', count: 1},
        {id: 3, username: 'User Longname 3', count: 1}
    ]
};


const userReducer = (state = initialStateUsers, action) => {
    if (action.type === 'USER_CLICKED') {
        const i = state.users.findIndex((e) => { return e.id === action.data.id });
        //// TODO: it's not working if other ways to get immutable objects
        //// const users = Object.assign({}, state.users);
        //// const { users } = state;
        const users = JSON.parse(JSON.stringify(state.users));
        users[i].count++;
        return {...state, users};

    }
    return state;
}

const initialStateApi = {
    url: '',
    loading: false,
    error: false,
};

const apiReducer = (state = initialStateApi, action) => {
    switch (action.type) {
        case 'REQUESTED_DOG':
            return {
                url: '',
                loading: true,
                error: false,
            };
        case 'REQUESTED_DOG_SUCCEEDED':
            return {
                url: action.url,
                loading: false,
                error: false,
            };
        case 'REQUESTED_DOG_FAILED':
            return {
                url: '',
                loading: false,
                error: true,
            };
        case 'REQUESTED_CAT':
            return {
                url: '',
                loading: true,
                error: false,
            };
        case 'REQUESTED_CAT_SUCCEEDED':
            return {
                url: action.url,
                loading: false,
                error: false,
            };
        case 'REQUESTED_CAT_FAILED':
            return {
                url: '',
                loading: false,
                error: true,
            };
    }
    return state;
}
// Actions

// Sagas
function* watchFetchDog(obj) {
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
    yield takeEvery('FETCHED_CAT', fetchCatAsync);
}

function* fetchDogAsync() {
    try {
        yield put(requestDog());
        const data = yield call(() => {
            return fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json());
            }
        );
        yield put(requestDogSuccess(data));
    } catch (error) {
        yield put(requestDogError());
    }
}

function* fetchCatAsync() {
    try {
        yield put(requestCat());
        const data = yield call(() => {
            return fetch('https://api.thecatapi.com/v1/images/search?size=full')
                .then(res => res.json());
        });
        yield put(requestCatSuccess(data));
    } catch (error) {
        yield put(requestCatError());
    }
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

const reducers = combineReducers({
    userReducer,
    apiReducer
});

const store = createStore(reducers, enhancer);
sagaMiddleware.run(watchFetchDog); //run middleware saga

export default store;

