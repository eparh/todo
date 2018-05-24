'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const { Component } = React;

const getNavigationConfig = require('../../../configs/navigation');

const Layout = require('../index');

require('./page.less');

class Page extends Component {
    getNavigationParams() {
        const { isAuthorized, navigate, onLogout } = this.props;
        const { login, register, ... rest } = getNavigationConfig(navigate, onLogout);

        return isAuthorized ? Object.values(rest) : [...Object.values(rest), login, register];
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

Page.propTypes = {
    isBusy: PropTypes.bool.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
    children: PropTypes.node,
    navigate: PropTypes.func
};

Page.defaultProps = {
    isBusy: false
};

module.exports = Page;

