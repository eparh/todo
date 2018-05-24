'use strict';

const actionTypes = require('../state/constants/actionTypes');
const tokenHelper = require('../helpers/tokenHelper');

const applicationEventConfig = [
    {
        event: actionTypes.LOGIN_SUCCESS,
        listener: res => res && res.data && tokenHelper.set(res.data.token)
    },
    {
        event: actionTypes.LOGOUT,
        listener: () => tokenHelper.remove()
    }
];

module.exports = applicationEventConfig;
