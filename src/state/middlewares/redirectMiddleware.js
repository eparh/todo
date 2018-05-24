'use strict';

const { navigate } = require('../actions');
const { NAVIGATE, HISTORY_NAVIGATE, LOGOUT } = require('../constants/actionTypes');
const routes = require('../../main/constants/routes.json');
const privateRoutes = require('../../configs/privateRoutes');

module.exports = store => next => (action) => {
    const { type, payload } = action;

    const state = store.getState();

    const isAuthenticated = state.getIn(['authenticationState', 'isAuthenticated']);
    const isNavigateAction = type === NAVIGATE || type === HISTORY_NAVIGATE;

    if (isNavigateAction) {
        if (payload.pathname === routes.root) {
            const route = isAuthenticated ? routes.tasks : routes.login;

            return store.dispatch(navigate(route));
        }

        if (privateRoutes.has(payload.pathname) && !isAuthenticated) {
            return store.dispatch(navigate(routes.login));
        }

        if (payload.pathname === routes.login && isAuthenticated) {
            return store.dispatch(navigate(routes.tasks));
        }
    }

    return next(action);
};