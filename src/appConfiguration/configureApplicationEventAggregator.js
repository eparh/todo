'use strict';

const applicationEventAggregator = require('./applicationEventAggregator');
const applicationEventConfig = require('../configs/applicationEventConfig');

applicationEventAggregator.configure(applicationEventConfig);
