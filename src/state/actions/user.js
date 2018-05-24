'use strict';

const actionTypes = require('../constants/actionTypes');
const userRepository = require('../../domain/repositories/user');

module.exports.login = ({ login, password }) => {
    return {
        type: actionTypes.LOGIN,
        payload: userRepository.login(login, password)
    };
};

module.exports.register = ({ login, password }) => {
    return {
        type: actionTypes.REGISTER,
        payload: userRepository.register(login, password)
    };
};

module.exports.logout = () => {
    return {
        type: actionTypes.LOGOUT
    };
};