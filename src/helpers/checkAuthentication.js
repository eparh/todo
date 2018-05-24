'use strict';

const tokenHelper = require('./tokenHelper');
const { LOGIN_SUCCESS } = require('../state/constants/actionTypes');

module.exports = (store) => {
    const token = tokenHelper.get();

    if (token) {
        store.dispatch({
            type: LOGIN_SUCCESS
        });
    }
};