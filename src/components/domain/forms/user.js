'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const UserModel = require('../../../domain/models/user');
const FormInput = require('../../common/formInput');

const UserForm = ({
    values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting
}) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
                isTouched={touched.login}
                placeholder="Login"
                errorMessage={errors.login}
            />
            <FormInput
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                isTouched={touched.password}
                placeholder="Password"
                errorMessage={errors.password}
            />
            <div className="form__button-container">
                <button type="submit" className="form__submit-button" disabled={isSubmitting}>
                    Submit
                </button>
            </div>
        </form>
    );
};

module.exports = UserForm;

UserForm.propTypes = {
    isSubmitting: PropTypes.bool,
    values: PropTypes.instanceOf(UserModel),
    errors: PropTypes.object,
    touched: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

UserForm.defaultProps = {
    isSubmitting: false
};