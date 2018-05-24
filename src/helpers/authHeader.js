'use strict';

const tokenHelper = require('./tokenHelper');

module.exports = () => {
    const token = tokenHelper.get();

    return token && `Bearer ${token}`;
};