'use strict';

const BaseError = require('./base');
const { notFound } = require('../../constants/errorStatusCodes');

class NotFoundError extends BaseError {
    constructor(message) {
        super(message);
        this.status = notFound;
    }
}

module.exports = NotFoundError;
