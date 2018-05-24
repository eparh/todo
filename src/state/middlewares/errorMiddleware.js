'use strict';

const { navigate } = require('../actions');
const routes = require('../../main/constants/routes.json');
const errorActionConfig = require('../../configs/errorActionConfig');

const errorMiddleware = store => next => (action) => {
    const { payload } = action;

    if (payload instanceof Error) {
        const nextAction = errorActionConfig[payload.status];

        if (nextAction) {
            Promise.resolve(store.dispatch(nextAction()))
                .then(store.dispatch(navigate(routes.root)));
        }
    }

    return next(action);
};

module.exports = errorMiddleware;
