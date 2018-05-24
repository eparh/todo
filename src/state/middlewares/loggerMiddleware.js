'use strict';

const { createLogger } = require('redux-logger');

// TODO
module.exports = createLogger({
    collapsed: true,
    stateTransformer: state => state && state.toJSON()
});