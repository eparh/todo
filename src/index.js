'use strict';
/*
const React = require('react');
const { render } = require('react-dom');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const { Provider } = require('react-redux');
const App = require('./containers/app');
const reducer = require('./state/reducers');

const store = createStore(
    reducer,
    {},
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);*/
require('./appConfiguration');
require('./styles/index.less');