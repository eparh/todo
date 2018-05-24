'use strict';

const BaseError = require('./base');
const { conflict } = require('../../constants/errorStatusCodes');

class ConflictError extends BaseError {
    constructor(message) {
        super(message);
        this.status = conflict;
    }
}

module.exports = ConflictError;
