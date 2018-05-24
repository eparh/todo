'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const { Component } = React;

const getNavigationConfig = require('../../configs/navigation');

const Layout = require('../../components/layout');

class MasterPage extends Component {
    getNavigationParams() {
        const { authenticationState: { isAuthenticated }, onLogout } = this.props;
        const { login, register, ... rest } = getNavigationConfig(onLogout);

        return isAuthenticated ? Object.values(rest) : [login, register];
    }

    render() {
        return (
            <Layout
                navigation={this.getNavigationParams()}
            >
                {this.props.children}
            </Layout>
        );
    }
}

MasterPage.propTypes = {
    authenticationState: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired,
    children: PropTypes.node
};

MasterPage.defaultProps = {
    isBusy: false
};

module.exports = MasterPage;

