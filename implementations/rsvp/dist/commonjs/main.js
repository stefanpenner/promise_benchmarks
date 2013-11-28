"use strict";
var EventTarget = require("./rsvp/events").EventTarget;
var Promise = require("./rsvp/promise").Promise;
var denodeify = require("./rsvp/node").denodeify;
var all = require("./rsvp/all").all;
var hash = require("./rsvp/hash").hash;
var rethrow = require("./rsvp/rethrow").rethrow;
var defer = require("./rsvp/defer").defer;
var config = require("./rsvp/config").config;
var configure = require("./rsvp/config").configure;
var resolve = require("./rsvp/resolve").resolve;
var reject = require("./rsvp/reject").reject;
var asap = require("./rsvp/asap").asap;

config.async = asap; // default async is asap;

function async(callback, arg) {
  config.async(callback, arg);
}

function on() {
  config.on.apply(config, arguments);
}

function off() {
  config.off.apply(config, arguments);
}

exports.Promise = Promise;
exports.EventTarget = EventTarget;
exports.all = all;
exports.hash = hash;
exports.rethrow = rethrow;
exports.defer = defer;
exports.denodeify = denodeify;
exports.configure = configure;
exports.resolve = resolve;
exports.reject = reject;
exports.async = async;
exports.on = on;
exports.off = off;