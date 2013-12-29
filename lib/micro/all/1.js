var suite = {
  name: "All 1",
  initialize: function(Constructor) {
    return [1];
  },
  test: function(Constructor, testInstance, array) {
    Constructor.all(array).then(function() {
      testInstance.end();
    });
  },
  options: {
    defer: true
  }
};

export suite;
