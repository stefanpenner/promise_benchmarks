"use strict";
var Promise = require("./promise")["default"];

exports["default"] = function all(array) {
  return Promise.all(array);
};