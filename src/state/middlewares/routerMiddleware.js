'use strict';

const { routerMiddleware } = require('react-router-redux');
const history = require('../../appConfiguration/history');

module.exports = routerMiddleware(history);