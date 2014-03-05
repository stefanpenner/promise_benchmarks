export var suite = {
  name: "All thenable 1",
  needs: 'Constructor',
  initialize: function(Constructor) {
    return [new Constructor(function(resolve) {
      resolve(1);
    })];
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
