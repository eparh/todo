'use strict';

const BaseError = require('./base');
const { validation } = require('../../constants/errorStatusCodes');

class ValidationError extends BaseError {
    constructor(message) {
        super(message);
        this.status = validation;
    }
}

module.exports = ValidationError;
