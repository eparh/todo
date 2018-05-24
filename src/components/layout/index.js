'use strict';

const React = require('react');

const { Component } = React;
const PropTypes = require('prop-types');
const classnames = require('classnames');
const Header = require('./header');
const Footer = require('./footer');

require('./index.less');

class Layout extends Component {
    render() {
        const { className, children, navigation } = this.props;

        const layoutClassNames = classnames('layout', className);

        return (
            <div className={layoutClassNames}>
                <Header
                    className="layout__header"
                    navigation={navigation}
                />
                <div className="layout__main">
                    {children}
                </div>
                <Footer className="layout__footer">2018</Footer>
            </div>
        );
    }
}

Layout.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    navigation: PropTypes.array
};

module.exports = Layout;
