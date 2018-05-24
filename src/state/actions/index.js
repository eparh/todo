'use strict';

const { push } = require('react-router-redux');

module.exports = {
    taskActions: require('./task'),
    userActions: require('./user'),
    navigate: push
};
