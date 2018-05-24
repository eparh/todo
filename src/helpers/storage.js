'use strict';

const window = require('global/window');

class Storage {
    constructor(name) {
        this.name = name;
        this.storage = window.localStorage;
    }

    get(key) {
        const storeValue = this.storage.getItem(`${this.name}.${key}`);

        return storeValue && JSON.parse(storeValue);
    }

    set(key, value) {
        const storeValue = JSON.stringify(value);

        return this.storage.setItem(`${this.name}.${key}`, storeValue);
    }

    remove(key) {
        return this.storage.removeItem(`${this.name}.${key}`);
    }
}

module.exports = Storage;
