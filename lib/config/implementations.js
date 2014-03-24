var global;
if (typeof window === 'object') {
  global = window;
} else if (typeof process === 'object') {
  global = process;
}

var implementationsRoot = '../../implementations';

var adapters = {
  platform: {
    Constructor: global.Promise && global.Promise
  },
  when: {
    Constructor: require('when').Promise
  },
  bluebird: {
    Constructor: require('bluebird'),
    filter: require('bluebird').filter
  },
  q: {
    Constructor: require('q').promise
  }
};

adapters.q.Constructor.all = require('q').all;
adapters.q.Constructor.resolve = require('q').resolve;
adapters.q.Constructor.reject = require('q').reject;

if (typeof process === 'object') {
  adapters['rsvp-2.0.4'] = {
    Constructor: require(implementationsRoot + '/rsvp-2.0.4/dist/commonjs/main').Promise
  };

  adapters['rsvp-2.0.4'].Constructor.resolve = require(implementationsRoot + '/rsvp-2.0.4/dist/commonjs/main').resolve
  adapters['rsvp-2.0.4'].Constructor.all = require(implementationsRoot + '/rsvp-2.0.4/dist/commonjs/main').all;

  adapters['rsvp-3.0.0'] = {
    Constructor: require(implementationsRoot + '/rsvp-3.0.0/dist/commonjs/main').Promise
  };

  adapters['rsvp-3.0.6'] = {
    Constructor: require(implementationsRoot + '/rsvp-3.0.6/dist/commonjs/main').Promise,
    filter:  require(implementationsRoot + '/rsvp-3.0.6/dist/commonjs/main').filter,
    map:  require(implementationsRoot + '/rsvp-3.0.6/dist/commonjs/main').map,
    allSettled:  require(implementationsRoot + '/rsvp-3.0.6/dist/commonjs/main').map,
    hash:  require(implementationsRoot + '/rsvp-3.0.6/dist/commonjs/main').hash,
    hashSettled:  require(implementationsRoot + '/rsvp-3.0.6/dist/commonjs/main').hashSettled
  };

  adapters['rsvp'] = {
    Constructor: require(implementationsRoot + '/rsvp/dist/commonjs/main').Promise,
    filter:  require(implementationsRoot + '/rsvp/dist/commonjs/main').filter,
    map:  require(implementationsRoot + '/rsvp/dist/commonjs/main').map,
    allSettled:  require(implementationsRoot + '/rsvp/dist/commonjs/main').allSettled,
    hash:  require(implementationsRoot + '/rsvp/dist/commonjs/main').hash,
    hashSettled:  require(implementationsRoot + '/rsvp/dist/commonjs/main').hashSettled
  };

} else {
  adapters['rsvp-2.0.4'] = {
    Constructor: require('rsvp-2.0.4').Promise
  };

  adapters['rsvp-2.0.4'].Constructor.all = require('rsvp-2.0.4').all;
  adapters['rsvp-3.0.0'] = {
    Constructor: require('rsvp-3.0.0').Promise
  };

  adapters['rsvp-3.0.6'] = {
    Constructor: require('rsvp-3.0.6').Promise,
    filter:  require('rsvp-3.0.6').filter,
    map:  require('rsvp-3.0.6').map,
    allSettled:  require('rsvp-3.0.6').allSettled,
    hash:  require('rsvp-3.0.6').hash,
    hashSettled:  require('rsvp-3.0.6').hashSettled
  };

  // adapters['rsvp'] = {
  //   Constructor: require('rsvp').Promise,
  //   filter:  require('rsvp').filter,
  //   map:  require('rsvp').map,
  //   allSettled:  require('rsvp').allSettled,
  //   hash:  require('rsvp').hash,
  //   hashSettled:  require('rsvp').hashSettled
  // };
}

export var implementations = Object.keys(adapters).filter(function(name) {
  return adapters[name].Constructor;
});
export function lookupFeature(implementation, thing) {
  return adapters[implementation][thing];
};
