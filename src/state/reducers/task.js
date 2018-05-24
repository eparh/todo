'use strict';

const Immutable = require('immutable');
const immutableMap = Immutable.Map;

const {
    ADD_TASK_SUCCESS, DELETE_TASK_SUCCESS, EDIT_TASK, COMPLETE_TASK, COMPLETE_ALL, CLEAR_COMPLETED, GET_TASKS_SUCCESS
} = require('../constants/actionTypes');


const { handleActions } = require('redux-actions');

const initialState = immutableMap();
const handlers = {
    [GET_TASKS_SUCCESS]: (state, action) => {
        return state.set('tasks', Immutable.fromJS(action.payload.data));
    },
    [EDIT_TASK]: (state, action) => {
        return state.map(task =>
            task.id === action.id ?
                {
                    ...task,
                    text: action.text
                } :
                task
        );
    },
    [COMPLETE_TASK]: (state, action) => {
        return state.map(task =>
            task.id === action.id ?
                {
                    ...task,
                    completed: !task.completed
                } :
                task
        );
    },
    [COMPLETE_ALL]: (state, action) => {
        const areAllMarked = state.every(todo => todo.completed);

        return state.map(task => ({
            ...task,
            completed: !areAllMarked
        }));
    },
    [CLEAR_COMPLETED]: (state, action) => state.filter(task => task.completed === false)
};

module.exports = handleActions(handlers, initialState);

