"use strict";
var EventTarget = require("./events").EventTarget;

var config = {};
EventTarget.mixin(config);

function configure(name, value) {
  if (name === 'onerror') {
    // handle for legacy users that expect the actual
    // error to be passed to their function added via
    // `RSVP.configure('onerror', someFunctionHere);`
    config.on('error', function(event){
      value(event.detail);
    });
  } else {
    config[name] = value;
  }
}

function on(){
  return config.on.apply(config, arguments);
}

function off(){
  return config.off.apply(config, arguments);
}

function trigger(){
  return config.trigger.apply(config, arguments);
}


exports.config = config;
exports.configure = configure;
exports.on = on;
exports.off = off;
exports.trigger = trigger;