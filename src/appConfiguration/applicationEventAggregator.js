'use strict';

const { EventEmitter } = require('events');

class ApplicationEventAggregator extends EventEmitter {
    configure(config) {
        config.forEach(item => this.on(item.event, item.listener));
    }

    emitActionAsEvent(type, payload, dispatch, getState) {
        this.emit(type, payload, dispatch, getState);
    }
}

module.exports = new ApplicationEventAggregator();
