'use strict';

const cloneDeep = require('lodash/cloneDeep');
const isString = require('lodash/isString');
const get = require('lodash/get');

class ConfigProvider {
    constructor(configurationStore) {
        this._configurationStore = configurationStore;
    }

    _getRawConfig() {
        return this._configurationStore;
    }

    get(path) {
        if (!isString(path)) {
            throw new Error('Calling get only allowed with string path argument');
        }
        const rawConfig = this._getRawConfig();
        const value = get(rawConfig, path);
        if (value === undefined) {
            throw new Error(`Configuration property "${path}" is not defined`);
        }

        return cloneDeep(value);
    }
}

module.exports = ConfigProvider;
