"use strict";
var Promise = require("./promise")["default"];

exports["default"] = function race(array) {
  return Promise.race(array);
};