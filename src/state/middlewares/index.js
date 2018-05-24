'use strict';

module.exports = [
    require('./loggerMiddleware'),
    require('./mapActionToApplicationEventMiddleware'),
    require('./promiseMiddleware'),
    require('./routerMiddleware'),
    require('./errorMiddleware'),
    require('redux-thunk').default,
    require('./redirectMiddleware')
];