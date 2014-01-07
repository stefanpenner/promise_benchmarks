export var suite = {
  name: "All 0",
  initialize: function(Constructor) {
    return [];
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
