'use strict';

const routes = require('../../constants/routes.json');

const onLogout = (bindActions) => {
    const { logout, navigate } = bindActions;

    return () => Promise
        .resolve(logout())
        .then(() => navigate(routes.login));
};

module.exports = {
    onLogout
};