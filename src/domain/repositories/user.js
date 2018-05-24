'use strict';

const apiUrls = require('../../configs/apiUrls');
const ajax = require('../../helpers/ajax');

function login(login, password) {
    return ajax.post(apiUrls.login, {
        login,
        password
    });
}

function register(login, password) {
    return ajax.post(apiUrls.register, {
        login,
        password
    });
}

module.exports = {
    login,
    register
};