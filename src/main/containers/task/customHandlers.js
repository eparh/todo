'use strict';

const onAddTask = (bindActions) => {
    const { addTask, getTasks } = bindActions;

    return (description) => addTask(description)
        .then(() => getTasks());
};

const onDeleteTask = (bindActions) => {
    const { deleteTask, getTasks } = bindActions;

    return (id) => deleteTask(id)
        .then(() => getTasks());
};

const onCompleteTask = (bindActions) => {
    const { completeTask, getTasks } = bindActions;

    return (task, value) => {
        return completeTask(task, value)
            .then(() => getTasks());
    };
};

const onEditTask = (bindActions) => {
    const { editTask, getTasks } = bindActions;

    return (task) => editTask(task)
        .then(() => getTasks());
};

const onDeleteCompleted = (bindActions) => {
    const { deleteCompleted, getTasks } = bindActions;

    return () => deleteCompleted()
        .then(() => getTasks());
};

module.exports = {
    onAddTask,
    onDeleteTask,
    onEditTask,
    onCompleteTask,
    onDeleteCompleted
};