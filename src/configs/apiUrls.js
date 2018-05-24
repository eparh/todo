'use strict';

const config = require('../helpers/config');
const apiUrl = config.get('API_ROOT');

module.exports = {
    login: `${apiUrl}/users/login`,
    register: `${apiUrl}/users/register`,

    task: `${apiUrl}/tasks/{id}`
};