'use strict';

const promiseMiddlewareFactory = require('redux-promise-middleware').default;

module.exports = promiseMiddlewareFactory({
    promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'ERROR']
});