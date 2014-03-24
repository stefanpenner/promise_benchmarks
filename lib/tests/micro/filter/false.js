function filterFn(entry) {
  return false;
}

export var test = {
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
  run: function(filter, testInstance, array) {
    filter(array, filterFn).then(function() {
      testInstance.end();
    });
  },
  options: {
    defer: true
  }
};
