"use strict";
var resolve = require("./resolve").resolve;

function cast(entry) {
  if (typeof entry === 'object' && entry.constructor === this) {
    return entry;
  }

  return resolve(entry);
}


exports.cast = cast;