'use strict';

const React = require('react');

const { Component } = React;
const PropTypes = require('prop-types');
const classnames = require('classnames');

require('./footer.less');

class Footer extends Component {
    render() {
        const { className, children } = this.props;
        const footerClassNames = classnames('footer', className);

        return (
            <div className={footerClassNames}>
                {children}
            </div>
        );
    }
}

Footer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};


module.exports = Footer;

