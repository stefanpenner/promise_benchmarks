export var suite = {
  name: 'filter with promiseFn',
  notes: 'bluebird does not yet support this feature, and as such is unnaturally fast',
  needs: 'filter',
  distribution: true,
  initialize: function(Constructor, count) {
    var array = [ ];

    for (var i = 0; i < count; i++) {
      array.push('');
    }

    return {
      array: array,
      filterFn: function() {
        return new Constructor(function(resolve) {
         resolve(1);
        });
      }
    };
  },
  test: function(filter, testInstance, setup) {
    filter(setup.array, setup.filterFn).then(function() {
      testInstance.end();
    });
  },
  options: {
    defer: true
  }
};
