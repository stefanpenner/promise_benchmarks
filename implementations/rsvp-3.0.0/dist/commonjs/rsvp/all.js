"use strict";
var Promise = require("./promise")["default"];

exports["default"] = function all(array, label) {
  return Promise.all(array, label);
};