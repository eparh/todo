'use strict';

const React = require('react');

const { Component } = React;
const PropTypes = require('prop-types');
const classes = require('classnames');

require('./input.less');

class Input extends Component {
    render() {
        const {
            className, type, name, placeholder, value,
            disabled, multiple, maxLength, onChange, onBlur, onKeyDown, autoFocus
        } = this.props;

        const inputClassName = classes('input__control', className);

        return (
            <div className="input">
                <input
                    className={inputClassName}
                    autoFocus={autoFocus}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    maxLength={maxLength}
                    onChange={onChange}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    disabled={disabled}
                    multiple={multiple}
                />
            </div>
        );
    }
}

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    shouldTrim: PropTypes.bool,
    autoFocus: PropTypes.bool
};

Input.defaultProps = {
    type: 'text',
    value: '',
    autoFocus: true,
    shouldTrim: true,
    isTouched: false
};

module.exports = Input;

