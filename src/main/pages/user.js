'use strict';

const React = require('react');
const { Component } = React;
const PropTypes = require('prop-types');
const Panel = require('../../components/common/panel');
const UserForm = require('../../components/domain/formWrappers/user');

class UserPage extends Component {
    render() {
        const { onSubmit, formLabel } = this.props;

        return (
            <Panel title={formLabel}>
                <UserForm onSubmit={onSubmit}/>
            </Panel>
        );
    }
}

UserPage.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formLabel: PropTypes.string.isRequired
};

module.exports = UserPage;
