"use strict";
var Promise = require("./promise")["default"];

exports["default"] = function reject(reason, label) {
  return Promise.reject(reason, label);
};