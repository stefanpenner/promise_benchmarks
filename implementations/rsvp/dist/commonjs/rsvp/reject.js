"use strict";
var Promise = require("./promise").Promise;

function reject(reason, label) {
  return new Promise(function (resolve, reject) {
    reject(reason);
  }, label);
}

exports.reject = reject;