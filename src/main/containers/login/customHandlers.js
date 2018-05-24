'use strict';

const routes = require('../../constants/routes.json');

const onSubmit = (bindActions) => {
    const { login, navigate } = bindActions;

    return (loginData) => {
        return login(loginData)
            .then(() => navigate(routes.tasks));
    };
};

module.exports = {
    onSubmit
};