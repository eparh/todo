'use strict';

const Storage = require('./storage');

const storage = new Storage('authentication');

module.exports.get = () => {
    return storage.get('user');
};

module.exports.set = (value) => {
    return storage.set('user', value);
};

module.exports.remove = () => {
    return storage.remove('user');
};