'use strict';
var Enumerator = require('./enumerator')['default'];
var PENDING = require('./-internal').PENDING;
var FULFILLED = require('./-internal').FULFILLED;
var o_create = require('./utils').o_create;
function PromiseHash(Constructor, object, label) {
    this._superConstructor(Constructor, object, true, label);
}
exports['default'] = PromiseHash;
PromiseHash.prototype = o_create(Enumerator.prototype);
PromiseHash.prototype._superConstructor = Enumerator;
PromiseHash.prototype._init = function () {
    this._result = {};
};
PromiseHash.prototype._validateInput = function (input) {
    return input && typeof input === 'object';
};
PromiseHash.prototype._validationError = function () {
    return new Error('Promise.hash must be called with an object');
};
PromiseHash.prototype._enumerate = function () {
    var promise = this.promise;
    var input = this._input;
    var results = [];
    for (var key in input) {
        if (promise._state === PENDING && input.hasOwnProperty(key)) {
            results.push({
                position: key,
                entry: input[key]
            });
        }
    }
    var length = results.length;
    this._remaining = length;
    var result;
    for (var i = 0; promise._state === PENDING && i < length; i++) {
        result = results[i];
        this._eachEntry(result.entry, result.position);
    }
};