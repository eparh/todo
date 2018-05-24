'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const { Component } = React;

const filterTitles = require('../../../constants/filterTitles');

require('./taskFilterPanel.less');

class TaskFilterPanel extends Component {
    renderTodoCount() {
        const { activeCount } = this.props;
        const itemWord = activeCount === 1 ? 'item' : 'items';

        return (
            <span className="task-filter-panel__task-count">
                <strong>{activeCount || 'No'}</strong> {itemWord} left
            </span>
        );
    }

    renderFilterLink([filter, title]) {
        const { onShow } = this.props;

        return (
            <a className="task-filter-panel__filter"
                onClick={() => onShow(filter)}
            >
                {title}
            </a>
        );
    }


    renderClearButton() {
        const { completedCount, onDeleteCompleted } = this.props;

        if (completedCount > 0) {
            return (
                <div className="task-filter-panel__delete-completed-button"
                    onClick={onDeleteCompleted} >
                    Clear completed
                </div>
            );
        }
    }

    render() {
        return (
            <div className="task-filter-panel">
                {this.renderTodoCount()}
                <ul className="task-filter-panel__list">
                    {filterTitles.map((item, index) =>
                        <li className="task-filter-panel__item" key={index}>
                            {this.renderFilterLink(item)}
                        </li>
                    )}
                </ul>
                {this.renderClearButton()}
            </div>
        );
    }
}


TaskFilterPanel.propTypes = {
    completedCount: PropTypes.number,
    activeCount: PropTypes.number,
    onDeleteCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
};

module.exports = TaskFilterPanel;