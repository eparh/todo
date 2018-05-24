/* eslint-disable react/display-name */

'use strict';

const React = require('react');
const { Route } = require('react-router');
const routes = require('../main/constants/routes.json');
const Task = require('../main/containers/task');
const Login = require('../main/containers/login');
const Register = require('../main/containers/register');
const MasterPage = require('../main/containers/master');

module.exports = () => {
    return (
        <MasterPage>
            <Route path={routes.tasks} component={Task}/>
            <Route path={routes.login} component={Login}/>
            <Route path={routes.register} component={Register}/>
        </MasterPage>
    );
};

