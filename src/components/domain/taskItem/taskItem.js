'use strict';

const React = require('react');

const { Component } = React;
const PropTypes = require('prop-types');
const classnames = require('classnames');
const TaskInput = require('../taskInput');
const Checkbox = require('../../common/checkbox');

require('./taskItem.less');

class TaskItem extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            editing: false
        };
    }

    onDoubleClick() {
        this.setState({
            editing: true
        });
    }

    onSave(task, text) {
        if (text.length === 0) {
            this.props.onDelete(task.id);
        } else {
            this.props.onEdit({
                ...task,
                description: text
            });
        }

        this.setState({
            editing: false
        });
    }

    renderElement() {
        const { task, onComplete, onDelete } = this.props;

        if (this.state.editing) {
            return (
                <TaskInput
                    text={task.description}
                    onSave={(text) => this.onSave(task, text)}
                />
            );
        }

        return (
            <div
                className="task-item__label-container"
                onDoubleClick={this.onDoubleClick.bind(this)}
            >
                <Checkbox
                    className="task-item__toggle"
                    value={task.isCompleted}
                    onChange={(value) => onComplete(task, value)}
                />
                <label
                    className="task-item__label"
                >
                    {task.description}
                </label>
                <div
                    className="task-item__delete-icon"
                    onClick={() => onDelete(task.id)}
                />
            </div>
        );
    }

    render() {
        const { task } = this.props;

        const element = this.renderElement();

        const className = classnames('task-item', {
            'task-item--completed': task.isCompleted
        });

        return (
            <li className={className}>
                {element}
            </li>
        );
    }
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired
};

module.exports = TaskItem;
