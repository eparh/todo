'use strict';

const actionTypes = require('../constants/actionTypes');
const taskRepository = require('../../domain/repositories/task');

module.exports.getTasks = (isCompleted) => ({
    type: actionTypes.GET_TASKS,
    payload: taskRepository.getTasks(isCompleted)
});

module.exports.addTask = (description) => ({
    type: actionTypes.ADD_TASK,
    payload: taskRepository.addTask(description)
});

module.exports.deleteTask = (id) => ({
    type: actionTypes.DELETE_TASK,
    payload: taskRepository.deleteTask(id)
});

module.exports.editTask = (task) => ({
    type: actionTypes.EDIT_TASK,
    payload: taskRepository.editTask(task)
});

module.exports.completeTask = (task, value) => ({
    type: actionTypes.COMPLETE_TASK,
    payload: taskRepository.editTask({
        ...task,
        isCompleted: value
    })
});

module.exports.completeAll = () => ({
    type: actionTypes.COMPLETE_ALL,
    payload: taskRepository.completeTasks()
});

module.exports.deleteCompleted = () => ({
    type: actionTypes.DELETE_COMPLETED,
    payload: taskRepository.deleteCompletedTasks()
});
