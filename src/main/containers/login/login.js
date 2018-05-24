'use strict';

const factory = require('../factory');
const UserPage = require('../../pages/user');
const { userActions, navigate } = require('../../../state/actions');
const customHandlers = require('./customHandlers');

const options = {
    page: UserPage,
    actions: {
        ...userActions,
        navigate
    },
    stateList: ['authenticationState'],
    customHandlers,
    customProps: {
        formLabel: 'Login'
    }
};

module.exports = factory(options);