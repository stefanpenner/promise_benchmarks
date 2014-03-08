export var suite = {
  name: 'filter with promiseFn 10',
  needs: 'filter',
  initialize: function(Constructor, count) {
    var array = [ ];
    count = 10;

    for (var i = 0; i < count; i++) {
      array.push('');
    }

    return {
      array: array,
      filterFn: function() {
        return Constructor.resolve(true);
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
