'use strict';

const BaseError = require('./base');
const { notFound } = require('../../constants/errorStatusCodes');

class NoPermissionError extends BaseError {
    constructor(message) {
        super(message);
        this.status = notFound;
    }
}

module.exports = NoPermissionError;
