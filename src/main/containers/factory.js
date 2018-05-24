'use strict';

const { bindActionCreators } = require('redux');
const { connect } = require('react-redux');
const mapValues = require('lodash/mapValues');
const { withRouter } = require('react-router');

module.exports = ({
    page, actions = {}, stateList = [], customHandlers = {}, isRouter = true, customProps = {}
}) => {
    const mapDispatchToProps = (dispatch, ownProps) => {
        const bindActions = bindActionCreators(actions, dispatch);

        return {
            ...bindActions,
            ...mapValues(customHandlers, handler => handler.call(this, bindActions, ownProps))
        };
    };

    const mapStateToProps = (state, ownProps) => ({
        ...ownProps,
        ...customProps,
        ...stateList.reduce((previous, item) => {
            return {
                ...previous,
                [item]: state.getIn([item]).toJS()
            };
        }, {})
    });

    const container = connect(mapStateToProps, mapDispatchToProps)(page);

    return isRouter ? withRouter(container) : container;
};