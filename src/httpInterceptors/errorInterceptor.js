'use strict';

const UnauthorizedError = require('../domain/errrors/unauthorizedError');
const ServerError = require('../domain/errrors/serverError');
const NotFoundError = require('../domain/errrors/notFoundError');
const NotPermissionError = require('../domain/errrors/noPermissionError');
const ValidationError = require('../domain/errrors/validationError');

const { validation, server, unauthorized, notFound, noPermission } = require('../constants/errorStatusCodes');

module.exports = (response) => {
    const { response: { status }, message } = response;

    switch (status) {
            case unauthorized:
                throw new UnauthorizedError(message);
            case noPermission :
                throw new NotPermissionError(message);
            case server:
                throw new ServerError(message);
            case validation:
                throw new ValidationError(message);
            case notFound:
                throw new NotFoundError(message);
            default:
                throw new ServerError(message);
    }
};