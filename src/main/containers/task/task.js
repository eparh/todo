'use strict';

const factory = require('../factory');
const TasksPage = require('../../pages/task');
const { taskActions } = require('../../../state/actions');
const customHandlers = require('./customHandlers');

const options = {
    page: TasksPage,
    actions: taskActions,
    stateList: ['tasksState'],
    customHandlers
};

module.exports = factory(options);