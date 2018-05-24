/* eslint-disable react/prop-types */

'use strict';

const { withFormik } = require('formik');
const loginValidationSchema = require('../../../domain/validationSchemas/loginValidationSchema');
const InnerForm = require('../forms/user');
const UserModel = require('../../../domain/models/user');

module.exports = withFormik({
    validationSchema: loginValidationSchema,
    mapPropsToValues: props => new UserModel(props.login, props.password),
    handleSubmit: ( values, { props }) => props.onSubmit(values)
})(InnerForm);