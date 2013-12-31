"use strict";
var Promise = require("./promise")["default"];

exports["default"] = function race(array, label) {
  return Promise.race(array, label);
};