


var adapters = {
  dom: {
    Constructor: typeof window == 'object' && window.Promise
  },
  when: {
    Constructor: require('when').promise
  },
  bluebird: {
    Constructor: require('bluebird')
  }
};

if (typeof process === 'object') {
  adapters['rsvp-2.0.4'] = {
    Constructor: require('../../implementations/rsvp-2.0.4/dist/commonjs/main').Promise
  }
  adapters['rsvp'] = {
    Constructor: require('../../implementations/rsvp/dist/commonjs/main').Promise
  }
} else {
  adapters['rsvp-2.0.4'] = {
    Constructor: require('rsvp-2.0.4').Promise
  }
  adapters['rsvp'] = {
    Constructor: require('rsvp').Promise
  }
}

var implementations = Object.keys(adapters).filter(function(name) {
  return adapters[name].Constructor;
});

function lookupFeature(implementation, thing) {
  return adapters[implementation][thing];
}

export lookupFeature;
export implementations;
