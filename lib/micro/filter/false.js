function filterFn(entry) {
  return false;
}

export var suite = {
  name: 'filter false',
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
