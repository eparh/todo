'use strict';

const routes = require('../main/constants/routes.json');

module.exports = (onLogout) => {
    return {
        login: {
            label: 'Login',
            route: routes.login
        },
        register: {
            label: 'Register',
            route: routes.register
        },
        tasks: {
            label: 'Tasks',
            route: routes.tasks
        },
        logout: {
            label: 'Logout',
            action: onLogout
        }
    };
};
