'use strict';

const { unauthorized } = require('../constants/errorStatusCodes');
const { userActions } = require('../state/actions');

module.exports = {
    [unauthorized]: () => userActions.logout()
};