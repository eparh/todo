'use strict';

const axios = require('axios');
const errorInterceptor = require('../httpInterceptors/errorInterceptor');
const authHeader = require('./authHeader');

const defaults = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
};

const instance = axios.create(defaults);

instance.interceptors.response.use((response) => response, (response) => {
    errorInterceptor(response);

    return Promise.reject(response);
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = authHeader();

    return config;
}, (err) => Promise.reject(err)
);

module.exports = instance;