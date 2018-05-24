'use strict';

const immutableMap = require('immutable').Map;
const { handleActions } = require('redux-actions');

const { LOGIN_SUCCESS, LOGOUT } = require('../constants/actionTypes');

const initialState = immutableMap();

const handlers = {
    [LOGIN_SUCCESS]: (state) => {
        return state.set('isAuthenticated', true);
    },
    [LOGOUT]: (state) => {
        return state.set('isAuthenticated', false);
    }
};

module.exports = handleActions(handlers, initialState);