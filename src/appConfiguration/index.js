'use strict';

const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { ConnectedRouter } = require('react-router-redux');

require('./configureApplicationEventAggregator');

const history = require('./history');
const store = require('./store');

require('../helpers/checkAuthentication')(store);

const App = require('./app');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);