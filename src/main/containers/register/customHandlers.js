'use strict';

const routes = require('../../constants/routes.json');

const onSubmit = (bindActions) => {
    const { register, navigate } = bindActions;

    return (registerData) => {
        return register(registerData)
            .then(() => navigate(routes.login));
    };
};

module.exports = {
    onSubmit
};