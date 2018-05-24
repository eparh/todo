'use strict';

const factory = require('../factory');
const MasterPage = require('../../pages/master');
const { userActions, navigate } = require('../../../state/actions');
const customHandlers = require('./customHandlers');

const options = {
    page: MasterPage,
    actions: {
        ...userActions,
        navigate
    },
    stateList: ['authenticationState'],
    customHandlers,
    isRouter: false
};

module.exports = factory(options);