'use strict';

const BaseError = require('./base');
const { server } = require('../../constants/errorStatusCodes');

class ServerError extends BaseError {
    constructor(message) {
        super(message);
        this.statusCode = server;
    }
}

module.exports = ServerError;
