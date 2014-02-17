export var suite = {
  name: "All 1",
  needs: 'Constructor',
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
