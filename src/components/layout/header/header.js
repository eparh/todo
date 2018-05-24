'use strict';

const React = require('react');

const { Component } = React;
const { NavLink } = require('react-router-dom');
const PropTypes = require('prop-types');
const classnames = require('classnames');

require('./header.less');

class Header extends Component {
    render() {
        const { className, navigation } = this.props;

        const headerClassNames = classnames('header', className);

        const navigationSet = navigation.map(({ label, route, action }, index) => {
            return action ?
                <li
                    key={index}
                    onClick={action}
                >
                    <a className="header__navigation-item">{label}</a>
                </li>
                :
                <li
                    key={index}
                >
                    <NavLink
                        to={route}
                        className="header__navigation-item"
                    >
                        {label}
                    </NavLink>
                </li>
            ;
        });

        return (
            <header className={headerClassNames}>
                <div className="header__left-panel">
                    <div className="header__label-container">
                        <span className="header__label">Simple Todo App</span>
                    </div>
                </div>
                <div className="header__right-panel">
                    <ul className="header__navigation-container">
                        {navigationSet}
                    </ul>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    className: PropTypes.string,
    navigation: PropTypes.array
};

module.exports = Header;
