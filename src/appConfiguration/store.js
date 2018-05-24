'use strict';

const { createStore, applyMiddleware } = require('redux');
const rootReducer = require('../state/reducers');
const Immutable = require('immutable');
const initialState = require('../main/constants/initialState.json');
const immutableInitialState = Immutable.fromJS(initialState);
const middlewares = require('../state/middlewares');

module.exports = createStore(
    rootReducer,
    immutableInitialState,
    applyMiddleware(...middlewares)
);