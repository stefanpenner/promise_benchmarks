"use strict";
var Promise = require("./promise")["default"];

exports["default"] = function resolve(value, label) {
  return Promise.resolve(value, label);
};