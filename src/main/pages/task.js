'use strict';

const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');

const Panel = require('../../components/common/panel');
const TaskInput = require('../../components/domain/taskInput');
const TaskList = require('../../components/domain/taskList');
const TaskFilterPanel = require('../../components/domain/taskFilterPanel');

const TaskModel = require('../../domain/models/task');

class TasksPage extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        const {
            tasksState, onEditTask, onDeleteTask, onCompleteTask, onDeleteCompleted, onAddTask, getTasks
        } = this.props;

        const { tasks } = tasksState;

        return (
            <Panel className="panel--main">
                <TaskInput
                    placeholder="What needs to be done?"
                    onSave={onAddTask}
                />
                <TaskList
                    tasks={tasks}
                    onEdit={onEditTask}
                    onDelete={onDeleteTask}
                    onComplete={onCompleteTask}
                />
                <TaskFilterPanel
                    activeCount={tasks.filter(task => !task.isCompleted).length}
                    completedCount={tasks.filter(task => task.isCompleted).length}
                    onDeleteCompleted={onDeleteCompleted}
                    onShow={getTasks}
                />
            </Panel>
        );
    }
}

TasksPage.propTypes = {
    tasksState: PropTypes.object.isRequired,
    getTasks: PropTypes.func.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onCompleteTask: PropTypes.func.isRequired,
    onDeleteCompleted: PropTypes.func.isRequired
};

module.exports = TasksPage;
