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
    Constructor: require('bluebird'),
    filter: require('bluebird').filter
  },
  q: {
    Constructor: require('q').promise
  }
};

adapters.when.Constructor.all = require('when').all;
adapters.q.Constructor.all = require('q').all;
adapters.q.Constructor.resolve = require('q').resolve;
adapters.q.Constructor.reject = require('q').reject;

if (typeof process === 'object') {
  adapters['rsvp-2.0.4'] = {
    Constructor: require('../implementations/rsvp-2.0.4/dist/commonjs/main').Promise
  };
  adapters['rsvp-3.0.0'] = {
    Constructor: require('../implementations/rsvp-3.0.0/dist/commonjs/main').Promise
  };
  adapters['rsvp-2.0.4'].Constructor.all = require('../implementations/rsvp-2.0.4/dist/commonjs/main').all;

  adapters['rsvp'] = {
    Constructor: require('../implementations/rsvp/dist/commonjs/main').Promise,
    filter:  require('../implementations/rsvp/dist/commonjs/main').filter,
    map:  require('../implementations/rsvp/dist/commonjs/main').map,
    allSettled:  require('../implementations/rsvp/dist/commonjs/main').map,
    hash:  require('../implementations/rsvp/dist/commonjs/main').hash,
    hashSettled:  require('../implementations/rsvp/dist/commonjs/main').hashSettled
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
