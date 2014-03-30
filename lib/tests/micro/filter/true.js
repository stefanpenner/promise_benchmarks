function filterFn(entry) {
  return true;
}

export var test = {
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
  run: function(filter, testInstance, array) {
    filter(array, filterFn).then(function() {
      testInstance.end();
    });
  },
  options: {
    defer: true
  }
};
