"use strict";
var Promise = require("./promise").Promise;

function resolve(thenable, label) {
  return new Promise(function(resolve, reject) {
    resolve(thenable);
  }, label);
}

exports.resolve = resolve;