'use strict';

const BaseError = require('./base');
const { unauthorized } = require('../../constants/errorStatusCodes');

class UnauthorizedError extends BaseError {
    constructor(message) {
        super(message);
        this.status = unauthorized;
    }
}

module.exports = UnauthorizedError;
