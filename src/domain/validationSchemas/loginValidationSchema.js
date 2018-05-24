/* eslint-disable no-magic-numbers */

'use strict';

const Yup = require('yup');

module.exports = Yup.object().shape({
    login: Yup.string().min(4).max(50).required('Login is required!'),
    password: Yup.string().min(4).max(50).required('Password is required!')
});