'use strict';

const React = require('react');

const { Component } = React;
const PropTypes = require('prop-types');
const classnames = require('classnames');

require('./panel.less');

class Panel extends Component {
    render() {
        const { children, className, title } = this.props;
        const panelClassNames = classnames('panel', className);
        const panelTitleElement = title && <h1 className="panel__title">{title}</h1>;

        return (
            <section className={panelClassNames}>
                {panelTitleElement}
                {children}
            </section>
        );
    }
}

Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

module.exports = Panel;

