var adapters = {
  rsvp: {
    Constructor: require('rsvp').Promise
  },
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

var implementations = Object.keys(adapters).filter(function(name){
  return adapters[name].Constructor
});

function lookupFeature(implementation, thing) {
  return adapters[implementation][thing];
}


export lookupFeature;
export implementations;
