'use strict';

const React = require('react');

const { Component } = React;
const PropTypes = require('prop-types');
const classnames = require('classnames');

require('./checkbox.less');

class Checkbox extends Component {
    componentWillMount() {
        const { defaultValue, value } = this.props;

        if (value === null && defaultValue !== null) {
            const { onChange } = this.props;

            return onChange(defaultValue);
        }

        return null;
    }

    onChange(event) {
        const { onChange } = this.props;

        return onChange(event.target.checked);
    }

    render() {
        const {
            className, name, value, defaultValue, onBlur, isDisabled
        } = this.props;
        const checkboxWrapperClassNames = classnames('checkbox', isDisabled ? 'checkbox--disabled' : '', className);

        let inputValue = false;

        if (value !== null) {
            inputValue = value;
        } else if (value === null && defaultValue !== null) {
            inputValue = defaultValue;
        }

        return (
            <div className={checkboxWrapperClassNames}>
                <input
                    className="checkbox__control"
                    type="checkbox"
                    name={name}
                    checked={inputValue}
                    onChange={this.onChange.bind(this)}
                    onBlur={onBlur}
                    disabled={isDisabled}
                />
            </div>
        );
    }
}

Checkbox.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    defaultValue: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    isDisabled: PropTypes.bool.isRequired
};

Checkbox.defaultProps = {
    value: null,
    defaultValue: null,
    isDisabled: false
};

module.exports = Checkbox;

