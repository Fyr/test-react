import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { Provider } from 'react-redux';
import store from './store';
import Container from './container';

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);
