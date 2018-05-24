'use strict';

const React = require('react');

const { Component } = React;
const PropTypes = require('prop-types');
const Input = require('../../common/input');

require('./taskInput.less');

const ENTER_KEY_CODE = 13;

class TaskInput extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            text: this.props.text || ''
        };
    }

    onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            const text = event.target.value.trim();

            this.props.onSave(text);

            this.setState({
                text: ''
            });
        }
    }

    onChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    onBlur(event) {
        const { value } = event.target;

        if (value) {
            this.props.onSave(value);
        }

    }

    render() {
        return (
            <div className="task-input">
                <Input
                    className="task-input__control"
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.text}
                    onBlur={this.onBlur.bind(this)}
                    onChange={this.onChange.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                />
            </div>
        );
    }
}

TaskInput.propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string
};

module.exports = TaskInput;
