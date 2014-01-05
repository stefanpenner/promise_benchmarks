"use strict";
var global;

if (typeof window === 'object') {
  global = window;
} else if (typeof process === 'object') {
  global = process;
}

var adapters = {
  platform: {
    Constructor: global.Promise && global.Promise
  },
  when: {
    Constructor: require('when').promise
  },
  bluebird: {
    Constructor: require('bluebird')
  }
};

adapters.when.Constructor.all = require('when').all;
if (typeof process === 'object') {
  adapters['rsvp-2.0.4'] = {
    Constructor: require('../../implementations/rsvp-2.0.4/dist/commonjs/main').Promise
  };
  adapters['rsvp-3.0.0'] = {
    Constructor: require('../../implementations/rsvp-3.0.0/dist/commonjs/main').Promise
  };
  adapters['rsvp-2.0.4'].Constructor.all = require('../../implementations/rsvp-2.0.4/dist/commonjs/main').all;

  adapters['rsvp'] = {
    Constructor: require('../../implementations/rsvp/dist/commonjs/main').Promise
  };

} else {
  adapters['rsvp-2.0.4'] = {
    Constructor: require('rsvp-2.0.4').Promise
  };

  adapters['rsvp-2.0.4'].Constructor.all = require('rsvp-2.0.4').all;
  adapters['rsvp-3.0.0'] = {
    Constructor: require('rsvp-3.0.0').Promise
  };

  adapters['rsvp'] = {
    Constructor: require('rsvp').Promise
  };
}

export var implementations = Object.keys(adapters).filter(function(name) {
  return adapters[name].Constructor;
});
export function lookupFeature(implementation, thing) {
  return adapters[implementation][thing];
};
