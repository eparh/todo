'use strict';

const urlTemplate = require('url-template');
const apiUrls = require('../../configs/apiUrls');
const ajax = require('../../helpers/ajax');

const taskUrl = urlTemplate.parse(apiUrls.task);

const getTasks = (isCompleted) => {
    const url = taskUrl.expand({});

    return ajax.get(url, {
        params: {
            isCompleted
        }
    });
};

const addTask = (description) => {
    const url = taskUrl.expand({});

    return ajax.post(url, {
        description
    });
};

const deleteTask = (id) => {
    const url = taskUrl.expand({
        id
    });

    return ajax.delete(url);
};

const deleteCompletedTasks = () => {
    const url = taskUrl.expand({});

    return ajax.delete(url);
};

const editTask = (task) => {
    const url = taskUrl.expand({
        id: task.id
    });

    return ajax.put(url, task);
};

const completeTasks = () => {
    const url = taskUrl.expand({});

    return ajax.put(url);
};

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    deleteCompletedTasks,
    editTask,
    completeTasks
};