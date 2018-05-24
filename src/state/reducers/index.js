'use strict';

const { combineReducers } = require('redux-immutable');
const { routerReducer } = require('react-router-redux');
const taskReducer = require('./task');
const userReducer = require('./user');

const rootReducer = combineReducers({
    authenticationState: userReducer,
    tasksState: taskReducer,
    routing: routerReducer
});

module.exports = rootReducer;
