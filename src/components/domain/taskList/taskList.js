'use strict';

const React = require('React');
const { Component } = React;
const PropTypes = require('prop-types');
const TaskItem = require('../taskItem');

require('./taskList.less');

class TaskList extends Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        const { tasks, onEdit, onDelete, onComplete } = this.props;

        return (
            <div className="task-list">
                <ul className="task-list__list">
                    {tasks && tasks.map(task =>
                        <TaskItem
                            key={task.id}
                            task={task}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onComplete={onComplete}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired
};

module.exports = TaskList;