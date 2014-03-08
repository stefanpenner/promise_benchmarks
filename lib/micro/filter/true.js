function filterFn(entry) {
  return true;
}

export var suite = {
  name: 'filter true',
  needs: 'filter',
  distribution: true,
  initialize: function(Constructor, n) {
    var result = [];

    for (var i = 0; i < n; i++) {
      result.push('');
    }

    return result;
  },
  test: function(filter, testInstance, array) {
    filter(array, filterFn).then(function() {
      testInstance.end();
    });
  },
  options: {
    defer: true
  }
};
