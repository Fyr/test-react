import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { userReducer } from './reducers/user';
import { apiReducer } from './reducers/api';
import { requestDog, requestDogSuccess, requestDogError, requestCat, requestCatSuccess, requestCatError } from './actions';
import { fetchDogAsync } from './sagas/fetchDog';
import { fetchCatAsync } from './sagas/fetchCat';

// Sagas
function* watchSagas() {
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
    yield takeEvery('FETCHED_CAT', fetchCatAsync);
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
sagaMiddleware.run(watchSagas); //run middleware saga

export default store;

