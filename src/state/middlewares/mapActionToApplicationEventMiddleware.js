'use strict';

const applicationEventAggregator = require('../../appConfiguration/applicationEventAggregator');

const mapActionToApplicationEventMiddleware = store => next => (action) => {
    applicationEventAggregator.emitActionAsEvent(action.type, action.payload, store.dispatch, store.getState);

    return next(action);
};

module.exports = mapActionToApplicationEventMiddleware;
