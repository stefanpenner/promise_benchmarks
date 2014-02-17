function filterFn(entry) {
  return false;
}

export var suite = {
  name: "filter none 1",
  needs: 'filter',
  initialize: function(Constructor) {
    return [''];
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
