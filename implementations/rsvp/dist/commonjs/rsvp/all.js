"use strict";
/* global toString */

var Promise = require("./promise").Promise;
var isArray = require("./utils").isArray;
var isFunction = require("./utils").isFunction;

function all(promises, label) {
  if (!isArray(promises)) {
    throw new TypeError('You must pass an array to all.');
  }

  return new Promise(function(resolve, reject) {
    var results = [], remaining = promises.length,
    promise;

    if (remaining === 0) {
      resolve([]);
    }

    function resolver(index) {
      return function(value) {
        resolveAll(index, value);
      };
    }

    function resolveAll(index, value) {
      results[index] = value;
      if (--remaining === 0) {
        resolve(results);
      }
    }

    for (var i = 0; i < promises.length; i++) {
      promise = promises[i];

      if (promise && isFunction(promise.then)) {
        promise.then(resolver(i), reject, "RSVP: RSVP#all");
      } else {
        resolveAll(i, promise);
      }
    }
  }, label);
}

exports.all = all;