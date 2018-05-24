'use strict';

const React = require('react');

const { Component } = React;
const PropTypes = require('prop-types');
const classes = require('classnames');

require('./formInput.less');

class FormInput extends Component {
    render() {
        const {
            className, type, name, placeholder, value, disabled, multiple, maxLength, errorMessage, isTouched,
            onChange, onBlur
        } = this.props;

        const showError = isTouched && errorMessage;

        const inputClassName = classes('form__control', className, {
            'form__control--invalid': showError
        });

        return (
            <div className="form__input">
                <input
                    className={inputClassName}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    maxLength={maxLength}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    multiple={multiple}
                />
                {showError && <div className="form__error-message">{errorMessage}</div>}
            </div>
        );
    }
}

FormInput.propTypes = {
    className: PropTypes.string,
    errorMessage: PropTypes.string,
    isTouched: PropTypes.bool,
    type: PropTypes.string,
    name: PropTypes.string,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    shouldTrim: PropTypes.bool
};

FormInput.defaultProps = {
    type: 'text',
    value: '',
    shouldTrim: true,
    isTouched: false
};

module.exports = FormInput;

